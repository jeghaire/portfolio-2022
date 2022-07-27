import Image from 'next/image'
import Link from 'next/link'
import { images } from '../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useState } from 'react'

const navMenuOptions = ['home', 'about', 'work', 'skills', 'contact']

export default function Navbar() {
  const [toggled, setToggled] = useState(false)

  return (
    <nav className="flex items-center py-6 px-6 md:px-32 border-b border-white/25 w-full bg-white/25 backdrop-blur-md sticky top-0 z-[100]">
      <div className="relative flex items-start justify-start w-fit p-0">
        <Image
          src={images.dev}
          height={30}
          width={100}
          objectFit="contain"
          className="m-0 p-0"
          alt=""
        />
      </div>
      <ul className="hidden md:flex items-center ml-auto">
        {navMenuOptions.map(item => (
          <li key={`link-${item}`} className="ml-5">
            <div />
            <Link href={`#${item}`}>
              <a className="text-base-dark-gray hover:text-base-accent font-bold text-[0.8rem] uppercase transition duration-300 ease-in-out">{item}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="ml-auto md:hidden">
        <HiMenuAlt4 onClick={() => setToggled(true)} className="justify-end w-9 h-9 p-1 text-white rounded-full relative flex justify-center items-center bg-base-accent" />
        {toggled && (
          <>
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 z-2000 p-3 w-9/12 h-screen items-end bg-white bg-[url('/images/bgWhite.png')] bg-cover bg-repeat shadow-lg"
            >
              <ul className="h-full w-full flex flex-col">
                <HiX onClick={() => setToggled(false)} className="justify-self-center text-base-accent h-6 w-6 ml-auto mt-6 mb-8" />
                {navMenuOptions.map(item => (
                  <li key={`link-${item}`} onClick={() => setToggled(false)}>
                    <div />
                    <Link href={`#${item}`}>
                      <a className="block w-full h-full p-4 text-base-dark-gray hover:text-base-accent hover:translate-x-0.5 font-bold text-sm uppercase transition duration-300 ease-in-out">{item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </div>
    </nav >
  )
}
