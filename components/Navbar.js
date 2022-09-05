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

  //Hide nav on scroll down
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

  //Dynamically update nav to reflect new section
  useEffect(() => {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {

      // Get current scroll position
      let scrollY = window.pageYOffset;

      // Now we loop through sections to get height, top and ID values for each
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;

        // Original:
        // const sectionTop = current.offsetTop - 50;
        //
        // Alex Turnwall's update:
        // Updated original line (above) to use getBoundingClientRect instead of offsetTop, based on:
        // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
        // https://newbedev.com/difference-between-getboundingclientrect-top-and-offsettop
        // This allows the use of sections inside a relative parent, which I'm not using here, but needed for a project
        //
        const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
        var sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
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
    <nav id="nav" className={`navigation flex items-center py-4 px-5 md:px-28 border-white/25 w-full bg-white/25 backdrop-blur-md sticky top-0 z-[100] ${colorChange && `shadow-sm border-b ${hideNav && 'md:transition-all md:duration-300 md:ease-in-out md:-top-28'}`}`}>
      {/* <nav id="nav" className={`navigation flex items-center py-5 px-5 md:px-28 border-white/25 w-full bg-white/25 backdrop-blur-md sticky top-0 z-[100] ${colorChange && `shadow-sm border-b`}`}> */}
      <Link href="/">
        <a className="relative h-8 w-20 md:h-8 md:w-32 flex items-center outline-none">
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
        {navMenuOptions.map(item => (
          <li key={`link-${item}`} className="ml-5">
            <div />
            <Link href={`#${item}`}>
              <a className="hover:text-base-accent outline-none text-sm font-mono capitalize transition duration-300 ease-in-out">{item}</a>
            </Link>
          </li>
        ))}
        <li className="ml-5">
          <Link href="/cv/Jomavi.pdf" download>
            <a className="border border-base-dark inline-block outline-none rounded-lg py-3 px-7 hover:text-base-dark/80 font-mono hover:shadow-lg transition-all duration-400 ease-in-out active:scale-[0.96]">Resume</a>
          </Link>
        </li>
      </ul>

      <div className="ml-auto md:hidden">
        <BiMenu onClick={() => setToggled(true)} className="justify-end w-10 h-10 p-1.5 relative flex justify-center items-center text-base-dark border" />
        {toggled && (
          <div className="fixed top-[10vh] right-0 bottom-0 z-10 p-3 h-[90vh] w-full bg-transparent" onClick={() => setToggled(false)}>
            <motion.div
              whileInView={{ x: [6, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 z-10 p-3 w-9/12 h-screen items-end bg-white bg-[url('/images/bgWhite.png')] bg-cover bg-repeat shadow-lg"
            >
              <ul className="h-full w-full flex flex-col">
                <BiX onClick={() => setToggled(false)} className="justify-self-center text-base-dark h-10 w-10 p-1.5 ml-auto mt-3 mb-7 mr-2 border" />
                {navMenuOptions.map(item => (
                  <li key={`link-${item}`} onClick={() => setToggled(false)}>
                    <Link href={`#${item}`}>
                      <a className="block w-full h-full p-4 outline-none text-sm uppercase transition duration-300 ease-in-out">{item}</a>
                    </Link>
                  </li>
                ))}
                <li className="mt-5" onClick={() => setToggled(false)}>
                  <Link href="/cv/Jomavi.pdf" download>
                    <a className="border border-base-dark inline-block outline-none rounded-lg py-3 px-7 font-mono transition-all duration-400 ease-in-out hover:bg-opacity-90 active:scale-[0.96]">Resume</a>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </nav >
  )
}
