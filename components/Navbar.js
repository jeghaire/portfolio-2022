import Image from 'next/image'
import Link from 'next/link'
import { BiMenu, BiX } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navMenuOptions = ['about', 'projects', 'experience', 'contact']

export default function Navbar() {
  const [toggled, setToggled] = useState(false)
  const [colorChange, setColorchange] = useState(false)
  const [hideNav, setHideNav] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true)
    }
    else {
      setColorchange(false)
    }
  }

  useEffect(() => {
    const navbarChange = window.addEventListener('scroll', changeNavbarColor)
    return () => window.removeEventListener('scroll', navbarChange)
  }, [])

  useEffect(() => {
    var prevScrollpos = window.pageYOffset
    const handleHideNavbar = () => {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos >= currentScrollPos) {
        setHideNav(false)
      } else {
        setHideNav(true)
      }
      prevScrollpos = currentScrollPos
    }

    const hideNavbar = window.addEventListener('scroll', handleHideNavbar)
    return () => window.removeEventListener('scroll', hideNavbar)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
      let scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
        var sectionId = current.getAttribute("id");

        if (
          scrollY > sectionTop &&
          scrollY <= sectionTop + sectionHeight
        ) {
          document.querySelector("nav a[href*=" + sectionId + "]").classList.add("active");
        } else {
          document.querySelector("nav a[href*=" + sectionId + "]").classList.remove("active");
        }
      });
    }
  }, [])

  return (
    <nav className={`navigation flex items-center py-4 px-5 md:px-28 border-white/25 w-full bg-white/25 backdrop-blur-md sticky top-0 z-[100] ${colorChange && `shadow-sm border-b ${hideNav && 'transition-all duration-300 ease-in-out -top-28'}`}`}>
      <Link href="/">
        <a className="relative h-8 w-20 md:h-8 md:w-28 flex items-center outline-none">
          <Image
            priority
            src="/images/jomavi.png"
            layout="fill"
            objectFit="contain"
            alt=""
            onClick={() => setToggled(false)}
          />
        </a>
      </Link>
      <ul className="hidden md:flex items-center ml-auto">
        {navMenuOptions.map((item, idx) => (
          <li key={`link-${item}`} className="ml-5">
            <div />
            <Link href={`#${item}`}>
              <a className="outline-none text-sm font-mono capitalize">{item}</a>
            </Link>
          </li>
        ))}
        <li className="ml-5">
          <a className="border border-base-dark inline-block outline-none rounded py-2.5 px-6 text-black hover:text-base-dark/80 font-mono hover:shadow-lg transition-all duration-400 ease-in-out active:scale-[0.96]" href="/cv/Jomavi.pdf" download>Resume</a>
        </li>
      </ul>

      <div className="ml-auto md:hidden">
        <BiMenu onClick={() => setToggled(true)} className="justify-end w-10 h-10 p-1.5 relative flex justify-center items-center text-black border border-base-dark" />
        {toggled && (
          <div className="fixed top-[10vh] right-0 bottom-0 z-10 p-3 h-[90vh] w-full bg-transparent" onClick={() => setToggled(false)}>
            <motion.div
              whileInView={{ x: [6, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 z-10 p-3 w-9/12 h-screen items-end bg-white bg-[url('/images/bgWhite.png')] bg-cover bg-repeat shadow-lg"
            >
              <ul className="h-full w-full flex flex-col">
                <BiX onClick={() => setToggled(false)} className="justify-self-center text-black h-10 w-10 p-1.5 ml-auto mt-3 mb-7 mr-2 border border-base-dark" />
                {navMenuOptions.map(item => (
                  <li key={`link-${item}`} onClick={() => setToggled(false)}>
                    <Link href={`#${item}`}>
                      <a className="block w-full h-full p-4 outline-none text-[0.8rem] font-mono uppercase transition duration-300 ease-in-out">{item}</a>
                    </Link>
                  </li>
                ))}
                <li className="mt-5" onClick={() => setToggled(false)}>
                  <a className="border border-base-dark inline-block outline-none rounded py-2.5 px-6 text-[0.96rem] font-mono transition-all duration-400 ease-in-out hover:bg-opacity-90 active:scale-[0.96]" href="/cv/Jomavi.pdf" download>Resume</a>
                </li>
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </nav >
  )
}
