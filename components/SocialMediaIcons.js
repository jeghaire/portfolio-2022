import Link from 'next/link'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { DiGithubAlt } from 'react-icons/di'

function SocialMediaIcons() {
  return (
    <div className="hidden md:flex items-center justify-end flex-col p-2 2xl:w-[70px] 2xl:h-[70px] m-0 my-1">
      <Link href="/">
        <a className="w-[40px] h-[40px] rounded-full bg-white text-base-dark-gray hover:bg-base-accent hover:border-base-accent hover:text-white m-0 my-0.5 border border-base-light-gray flex justify-center items-center transition-colors duration-300 ease-in-out 2xl:w-[70px] 2xl:h-[70px] m-0 2xl:my-0.5">
          <FaLinkedinIn className="w-2/5 h-2/5" />
        </a>
      </Link>
      <Link href="https://github.com/jeghaire"><a className="w-[40px] h-[40px] p-0 rounded-full bg-white text-base-dark-gray hover:bg-base-accent hover:border-base-accent hover:text-white m-0 my-0.5 border border-base-light-gray flex justify-center items-center transition-colors duration-300 ease-in-out 2xl:w-[70px] 2xl:h-[70px] m-0 2xl:my-0.5">
        <DiGithubAlt className="w-2/3 h-2/3" />
      </a>
      </Link>
      <Link href="https://twitter.com/kngMavi"><a className="w-[40px] h-[40px] rounded-full bg-white text-base-dark-gray hover:bg-base-accent hover:border-base-accent hover:text-white m-0 my-0.5 border border-base-light-gray flex justify-center items-center transition-colors duration-300 ease-in-out 2xl:w-[70px] 2xl:h-[70px] m-0 2xl:my-0.5">
        <BsTwitter className="w-2/5 h-2/5" />
      </a>
      </Link>
    </div >
  )
}

export default SocialMediaIcons