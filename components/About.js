import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { urlFor, configuredSanityClient } from '../sanity/client'
import { AppWrap, MotionWrap } from '../wrappers'

function About() {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type=="abouts"]{_id, description, title, imgUrl}'
    configuredSanityClient.fetch(query).then(data => setAbouts(data))
  }, [])

  return (
    <section className="flex flex-col justify-center items-center py-24 px-2">
      {/* <h1 className="text-4xl md:text-5xl text-base-dark font-extrabold capitalize tracking-tight text-center">I know that <span className="text-base-accent block sm:inline">Good Design</span><br className="hidden sm:block" /> Means <span className="text-base-accent block sm:inline"> Good Business</span></h1> */}
      <h1 className="text-4xl md:text-5xl text-base-dark font-extrabold capitalize tracking-tight text-center">Intensity <span className="text-base-accent block sm:inline">over</span> Extensity</h1>

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
  'bg-base-primary',
)