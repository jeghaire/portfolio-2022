import { useState } from 'react'

import { useSession, signIn } from "next-auth/react"

import { AppWrap, MotionWrap } from '../wrappers'
import { configuredSanityClient } from '../sanity/client'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const { data: session } = useSession()

  const { message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    err = false
    if (!message) {
      setErr(true)
      return
    }

    if (session && message.length) {
      setLoading(true)
      signIn('google')
      
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
          setFormData({ name: '', email: '', message: '' })
        })
        .catch((err) => console.log(err));
    }
    setLoading(false);
    return
  }

  return (
    <section className="flex flex-col justify-center items-center py-24 px-5">

      <h1 className="text-4xl md:text-5xl text-base-dark font-extrabold tracking-tight text-center mb-6">Drop <span className="text-base-accent">a Mes</span>sage</h1>

      {!isFormSubmitted ? (
        <div className="w-full max-w-md mx-auto flex-col my-2 mx-4 flex items-center justify-center mt-4">
          <div className="w-full m-0 my-[0.75rem] cursor-pointer rounded-sm transition-all duration-300 ease-in-out">
            <textarea
              className="font-display font-thin m-0 text-base text-left placeholder:text-zinc-600 text-base-dark leading-tight 2xl:text-base h-[170px] w-full border rounded-xs bg-white px-3 py-4 text-sans outline-none"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
            <p className={`text-rose-600 font-sans font-bold pt-2 ${err ? 'visible' : 'invisible'}`}>You have to add a message</p>
          </div>
          <button type="submit" className="font-mono m-0 mt-12 py-5 px-9 rounded-full bg-base-accent p-0 text-white shadow-lg hover:-translate-y-[1px] hover:shadow-xl active:scale-[0.95] transition-all duration-300 outline-none ease-in-out" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
          <div>
            <h3 className="font-display text-[2rem] sm:text-[2.75rem] 2xl:text-[4rem] mt-12 font-bold text-center text-base-dark">
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
  'bg-base-primary'
)