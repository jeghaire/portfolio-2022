import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image'
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../wrappers';
import { urlFor, configuredSanityClient } from '../sanity/client'

const Projects = () => {
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  useEffect(() => {
    const query = '*[_type == "works"]';

    configuredSanityClient.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <section className="py-10 md:py-32">
      <h1 className="text-4xl md:text-5xl text-base-dark font-extrabold capitalize tracking-tight text-center">My Creative <span className="text-base-accent">Portfolio</span> Section</h1>

      <div className="flex flex-row justify-center items-center flex-wrap m-0 mt-12 mb-3">
        {['All', 'UI/UX', 'Web App', 'Mobile App', 'React JS', 'Next.js'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`py-2.5 px-4 rounded-lg bg-white border text-black cursor-pointer transition-all duration-300 ease m-1 2xl:py-2 px-4 rounded-lg flex items-center justify-center text-xs text-left text-base-dark-gray 2xl:text-sm hover:ring-1 hover:ring-offset-0 hover:ring-base-secondary ${activeFilter === item ? 'bg-base-secondary text-[#fff] font-bold tracking-wide ring-1 ring-offset-0 ring-base-secondary' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap items-center justify-center"
      >
        {filterWork.map((work, index) => (
          <div className="w-[270px] flex-col m-4 p-3 rounded-xl shadow bg-white text-black cursor-pointer transition-all duration-300 ease flex items-center justify-center" key={index}>
            <div
              className="relative flex items-center justify-center w-full h-[230px] 2xl:h-[350px]"
            >
              <Image src={urlFor(work.imgUrl)} alt={work.name} className="h-full w-full h-76 w-76 rounded-xl object-cover" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black/25 rounded-lg opacity-0 transition-all duration-300 ease flex items-center justify-center"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="w-[42px] h-[42px] rounded-full bg-black/50 text-white m-2 font-bold cursor-pointer transition-all duration-300 ease flex items-center justify-center"
                  >
                    <AiFillEye className="w-1/2 h-1/2 text-white" />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="w-[42px] h-[42px] rounded-full bg-black/50 text-white m-2 font-bold cursor-pointer transition-all duration-300 ease flex items-center justify-center"
                  >
                    <AiFillGithub className="w-1/2 h-1/2 text-white" />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="p-1 w-full relative flex-col flex items-center justify-center">
              <h4 className="text-xs sm:text-sm md:text-base font-bold text-left text-base-dark mt-3">{work.title}</h4>
              <p className="text-xs text-left text-base-dark-gray 2xl:text-sm">{work.description}</p>

              <div className="absolute py-2 px-4 rounded-t-md bg-white text-xs -top-[22px] flex items-center justify-center">
                <p className="text-xs text-left text-base-dark-gray 2xl:text-sm">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Projects, 'flex-1 flex-col w-full'),
  'work',
  'bg-base-primary',
)
