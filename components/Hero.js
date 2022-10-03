import { useEffect, useState } from 'react'
import { AppWrap, ShiftBy } from '../wrappers'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const styleVaraints = {
  hidden: {
    y: 8,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

function Hero() {
  const [showPage, setShowPage] = useState(false)

  useEffect(() => {
    setShowPage(true)
  }, [showPage])

  return (
    <header className={`flex flex-col md:flex-row justify-center md:justify-start items-center w-full py-48 px-5 md:px-28 md:border-b ${showPage ? 'visible' : 'invisible'}`}>
      <ShiftBy y={-60}>
        <div className="text-left">
          <motion.p className="font-mono text-base md:text-lg leading-none mb-4"
            variants={styleVaraints}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 1 }}
          >
            Hi, my name is
          </motion.p>
          <motion.div className="relative h-24 w-72 lg:h-28 lg:w-[22rem] flex items-center"
            variants={styleVaraints}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Image
              priority
              src="/images/jomavi.png"
              layout="fill"
              objectFit="contain"
              alt=""
              onClick={() => setToggled(false)}
            />
          </motion.div>
          <motion.p className="block max-w-prose text-left md:text-lg py-6 font-display"
            variants={styleVaraints}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9, duration: 1 }}
          >I&#39;m a software engineer specializing in building <span className="underline decoration-1 underline-offset-2 md:underline-offset-4">beautiful experiences</span>. Currently, I’m focused on finding a place that will allow me learn, grow and work with an amazing team.</motion.p>

          <motion.div
            variants={styleVaraints}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Link href="mailto:jomaviprz@gmail.com?subject=New%20Job%20Offer">
              <a className="bg-base-dark text-white hover:bg-opacity-90 cursor-pointer rounded shadow-lg transition-all duration-400 ease-in-out hover:-translate-y-[1px] hover:shadow-xl outline-none inline-block py-4 px-8 font-mono m-0 active:scale-[0.96]">
                Hire Me!
              </a>
            </Link>
          </motion.div>
        </div>
      </ShiftBy>
    </header>
  )
}

export default AppWrap(
  Hero,
  'home',
  'bg-white',
)