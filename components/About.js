import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { urlFor, configuredSanityClient } from '../sanity/client'
import { AppWrap, MotionWrap } from '../wrappers'
import Image from 'next/image'

// const abouts = [
//   { title: 'Web Development', desc: 'I love what I do. Inspiration from my world.', imgUrl: images.about01 },
//   { title: 'Fullstack Developer', desc: 'I love what I do. Inspiration from my world.', imgUrl: images.about02 },
//   { title: 'UI/UX', desc: 'I love what I do. Inspiration from my world.', imgUrl: images.about03 },
//   { title: 'Motion Designer', desc: 'I love what I do. Inspiration from my world.', imgUrl: images.about04 }
// ]

function About() {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type=="abouts"]{_id, description, title, imgUrl}'
    configuredSanityClient.fetch(query).then(data => setAbouts(data))
  }, [])

  return (
    <section className="py-10 md:py-32">
      <h1 className="text-4xl md:text-5xl text-base-dark font-extrabold capitalize tracking-tight text-center">I know that <span className="ml-2 text-base-accent">Good Design</span><br /> Means <span className="ml-2 text-base-accent"> Good Business</span></h1>

      <div className="flex flex-wrap justify-center items-start mt-4">
        {abouts && abouts.map(about => (
          <motion.div
            key={about._id}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="flex flex-col justify-start items-start m-4 pb-3 w-[250px] 2xl:w-[420px] 2xl:my-4 2xl:mx-6 hover:translate-y-12"
          >
            <img alt="" src={urlFor(about.imgUrl)} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" className="object-cover w-full rounded-lg" />
            <h2 className="font-bold text-lg 2xl:text-3xl text-left text-base-dark mt-3 mb-0">{about.title}</h2>
            <p className="text-sm 2xl:text-xl text-left text-base-dark-gray">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(About, 'flex-1 flex-col w-full'),
  'about',
  'bg-white',
)