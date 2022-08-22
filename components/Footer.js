import { useState } from 'react'

import { useSession, signIn } from "next-auth/react"

import { AppWrap, MotionWrap } from '../wrappers'
import { configuredSanityClient } from '../sanity/client'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  const { message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    signIn('google', { callbackUrl: 'http://localhost:3000/#contact' })

    if (session && message) {
      const contact = {
        _type: 'contact',
        name: session.user.name,
        email: session.user.email,
        message: formData.message,
      }

      configuredSanityClient.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    }
    setLoading(false);
    return
  }

  return (
    <section className="flex flex-col justify-center items-center py-24 px-2">
      <h1 className="text-4xl md:text-5xl text-base-dark font-extrabold capitalize tracking-tight text-center">Drop <span className="text-base-accent block sm:inline">a Mes</span>sage</h1>

      {!isFormSubmitted ? (
        <div className="w-full flex-col my-2 mx-4 flex items-center justify-center mt-4">
          <div className="w-full m-0 my-[0.75rem] cursor-pointer rounded-sm bg-base-primary transition-all duration-300 ease-in-out">
            <textarea
              className="font-thin text-sm text-left placeholder:text-zinc-600 text-black leading-tight 2xl:text-base h-[170px] w-full border-none rounded-xs bg-white px-3 py-4 text-sans text-black outline-none"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="font-mono m-0 mt-12 py-5 px-9 rounded-full bg-base-accent p-0 text-white hover:shadow-sm shadow-xl transition duration-300 outline-none ease-in-out" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
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