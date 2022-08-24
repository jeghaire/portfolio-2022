import Image from 'next/image'
import Link from 'next/link'
import { images } from '../constants'
import { BiMenu, BiX } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navMenuOptions = ['about', 'projects', 'experience', 'contact']

export default function Navbar() {
  const [toggled, setToggled] = useState(false)
  const [colorChange, setColorchange] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    const navbarChange = window.addEventListener('scroll', changeNavbarColor)
    return () => window.removeEventListener('scroll', navbarChange)

  }, [])

  return (
    <nav className={`flex items-center py-5 px-5 md:px-28 border-white/25 w-full bg-white/25 backdrop-blur-md sticky top-0 z-[100] ${colorChange && 'shadow-sm border-b'}`}>
      <Link href="/">
        <a className="relative h-8 w-20 md:h-8 md:w-32 flex items-center outline-none">
          <Image
            priority
            src={images.dev}
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
          <Link href="/cv/Jomavi.docx" download>
            <a className="border inline-block outline-none border-base-dark rounded-lg py-3 px-7 hover:text-base-dark/80 font-mono shadow hover:shadow-lg transition-all duration-400 ease-in-out active:scale-[0.96]">Resume</a>
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
                      <a className="block w-full h-full p-4 outline-none font-mono text-sm uppercase transition duration-300 ease-in-out">{item}</a>
                    </Link>
                  </li>
                ))}
                <li className="mt-5" onClick={() => setToggled(false)}>
                  <Link href="/cv/Jomavi.docx" download>
                    <a className="border inline-block outline-none border-base-dark rounded-lg py-3 px-7 text-base font-mono hover:text-base-dark/80 shadow-md transition-all duration-400 ease-in-out active:scale-[0.96]">Resume</a>
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
