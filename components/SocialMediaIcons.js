import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

function SocialMediaIcons() {
  return (
    <div className="hidden md:flex items-center justify-end flex-col p-2 2xl:w-[70px] 2xl:h-[70px] m-0 my-1">
      <div className="w-[40px] h-[40px] rounded-full bg-white text-base-dark-gray hover:bg-base-accent hover:border-base-accent hover:text-white m-0 my-0.5 border border-base-light-gray flex justify-center items-center transition-colors duration-300 ease-in-out 2xl:w-[70px] 2xl:h-[70px] m-0 2xl:my-0.5">
        <BsTwitter className="w-[15px] h-[15px] 2xl:w-[30px] 2xl:h-[30px]" />
      </div>
      <div className="w-[40px] h-[40px] rounded-full bg-white text-base-dark-gray hover:bg-base-accent hover:border-base-accent hover:text-white m-0 my-0.5 border border-base-light-gray flex justify-center items-center transition-colors duration-300 ease-in-out 2xl:w-[70px] 2xl:h-[70px] m-0 2xl:my-0.5">
        <FaFacebookF className="w-[15px] h-[15px] 2xl:w-[30px] 2xl:h-[30px]" />
      </div>
      <div className="w-[40px] h-[40px] rounded-full bg-white text-base-dark-gray hover:bg-base-accent hover:border-base-accent hover:text-white m-0 my-0.5 border border-base-light-gray flex justify-center items-center transition-colors duration-300 ease-in-out 2xl:w-[70px] 2xl:h-[70px] m-0 2xl:my-0.5">
        <BsInstagram className="w-[15px] h-[15px] 2xl:w-[30px] 2xl:h-[30px]" />
      </div>
    </div>
  )
}

export default SocialMediaIcons
