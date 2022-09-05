import { AppWrap, MotionWrap } from '../wrappers'
import Link from 'next/link'
import Image from 'next/image'

function Hero() {
  return (
    <header className="flex flex-col md:flex-row justify-center md:justify-start items-center w-full py-32 md:py-40 px-5 md:px-28 border-b">
      <div className="text-left">
        <p className="font-mono text-base md:text-lg leading-none mb-4">Hi, my name is</p>
        <div className="relative h-24 w-72 lg:h-28 lg:w-[22rem] flex items-center">
          <Image
            priority
            src="/images/jomavi.png"
            layout="fill"
            objectFit="contain"
            alt=""
            onClick={() => setToggled(false)}
          />
        </div>
        <p className="block max-w-prose text-left md:text-lg py-6 font-display">I&#39;m a software engineer specializing in building <span className="underline decoration-1 underline-offset-2 md:underline-offset-4">beautiful experiences</span>. Currently, I’m focused on finding a place that will allow me learn, grow and work with an amazing team.</p>
        <Link href="mailto:jomaviprz@gmail.com?subject=New%20Job%20Offer">
          <a className="bg-base-dark bg-[#334155] text-white hover:bg-opacity-90 rounded-md shadow-lg transition-all duration-400 ease-in-out hover:-translate-y-[1px] hover:shadow-xl outline-none inline-block py-4 px-8 font-mono m-0 active:scale-[0.96]">Hire Me!</a>
        </Link>

        {/* bg-[#334155] hover:bg-white hover:text-base-dark */}
      </div>
    </header>
  )
}

export default AppWrap(
  MotionWrap(Hero, 'flex-1 flex-col w-full'),
  'home',
  'bg-white',
)