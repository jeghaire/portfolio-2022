import { AppWrap, MotionWrap } from '../wrappers'
import Link from 'next/link'
import { images } from '../constants'
import Image from 'next/image'

function Hero() {
  return (
    <header className="flex flex-col md:flex-row justify-center md:justify-start items-center w-full py-6 px-5 md:px-28">
      <div className="text-left">
        <p className="font-mono text-base md:text-lg leading-none mb-4">Hi, my name is</p>
        <div className="relative h-20 w-60 lg:h-24 lg:w-72 flex items-center">
          <Image
            priority
            src={images.dev}
            layout="fill"
            objectFit="contain"
            alt=""
            onClick={() => setToggled(false)}
          />
        </div>
        <p className="text-3xl md:text-4xl max-w-3xl leading-none mt-3 text-base-dark/75 font-normal font-display">I create beautiful things</p>
        <p className="block max-w-prose text-left md:text-lg py-6 font-display">I&#39;m a software engineer specializing in building beautiful experiences. Currently, I’m focused on finding a place that will allow me learn, grow and work with an amazing team.</p>
        <Link href="mailto:jomaviprz@gmail.com?subject=New%20Job%20Offer">
          <a className="border border-base-secondary bg-base-secondary text-white hover:bg-base-secondary/90 shadow-lg transition-all duration-400 ease-in-out hover:-translate-y-[1px] hover:shadow-xl outline-none inline-block rounded-lg py-4 px-8 font-mono m-0 active:scale-[0.96]">Hire Me!</a>
        </Link>
      </div>
      <div className="hidden md:inline-flex items-center ml-auto h-[400px] w-[400px]">
        <img src="/programming.svg" />
      </div>
    </header>
  )
}

export default AppWrap(
  MotionWrap(Hero, 'flex-1 flex-col w-full'),
  'home',
  'bg-white',
)