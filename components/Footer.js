import { useState } from 'react'
import Image from 'next/image'

import { images } from '../constants'
import { AppWrap, MotionWrap } from '../wrappers'
import { configuredSanityClient } from '../sanity/client'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { username, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    }

    configuredSanityClient.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="flex flex-col justify-center items-center py-24 px-2">
      <h1 className="text-4xl md:text-5xl text-base-dark font-extrabold capitalize tracking-tight text-center">Take a coffee <span className="text-base-accent">&</span> chat with me</h1>
      <div className="w-4/6 flex justify-space evenly items-center flex-wrap m-4 mt-6">
        <div className="w-full ssm:min-w-[300px] flex flex-row justify-start items-center m-0 my-2 p-2 rounded-sm  cursor-pointer bg-[#fef4f5] transition-all duration-300 ease-in-out hover:shadow-sm">
          <img className="w-[40px] h-[40px] m-0 mx-[0.7rem]" src={images.email} alt="email" />
          <a href="mailto:jomavix@hotmail.com" className="text-sm text-left text-base-dark-gray leading-tight 2xl:text-base font-medium">jomavix@hotmail.com</a>
        </div>
        <div className="w-full ssm:min-w-[300px] flex flex-row justify-start items-center m-0 my-2 p-2 rounded-sm cursor-pointer bg-[#fef4f5] transition-all duration-300 ease-in-out hover:shadow-sm">
          <img className="w-[40px] h-[40px] m-0 mx-[0.7rem]" src={images.mobile} alt="phone" />
          <a href="tel:+(234) 810 540 0295" className="text-sm text-left text-base-dark-gray leading-tight 2xl:text-base font-medium">+(234) 810 540 0295</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="w-[60%] flex-col my-2 mx-4 flex items-center justify-center">
          <div className="flex items-center justify-center w-full m-0 my-[0.75rem] cursor-pointer rounded-sm bg-base-primary transition-all duration-300 ease-in-out">
            <input className="text-sm text-left text-base-dark-gray leading-tight 2xl:text-base w-full p-1.5 border-none rounded-xs bg-white px-3 py-4 text-sans text-black outline-none" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="flex items-center justify-center w-full m-0 my-[0.75rem] cursor-pointer rounded-sm bg-base-primary transition-all duration-300 ease-in-out">
            <input className="text-sm text-left text-base-dark-gray leading-tight 2xl:text-base w-full p-1.5 border-none rounded-xs bg-white px-3 py-4 text-sans text-black outline-none" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className="w-full m-0 my-[0.75rem] cursor-pointer rounded-sm bg-base-primary transition-all duration-300 ease-in-out">
            <textarea
              className="text-sm text-left text-base-dark-gray leading-tight 2xl:text-base h-[170px] w-full border-none rounded-xs bg-white px-3 py-4 text-sans text-black outline-none"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="m-0 mt-12 py-5 px-9 rounded-full bg-base-accent p-0 text-white tracking-widest hover:shadow-sm shadow-xl transition duration-300 outline-none ease-in-out" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
          <div>
            <h3 className="text-[2rem] sm:text-[2.75rem] 2xl:text-[4rem] font-bold text-center text-black capitalize">
              Thank you for getting in touch!
          </h3>
          </div>
        )}
    </section>
  )
}
export default AppWrap(
  MotionWrap(Footer, 'flex-1 flex-col w-full'),
  'contact',
  'bg-base-primary',
)