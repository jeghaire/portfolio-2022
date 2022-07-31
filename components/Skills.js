import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

import { AppWrap, MotionWrap } from '../wrappers'
import { urlFor, configuredSanityClient } from '../sanity/client'

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    configuredSanityClient.fetch(query).then((data) => {
      setExperiences(data);
    });

    configuredSanityClient.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <section>
      <h1 className="text-4xl md:text-5xl text-base-dark font-extrabold capitalize tracking-tight text-center">Skills <span className="text-base-accent">&</span> Experiences</h1>


      <div className="w-[80%] mt-[3rem] flex flex-row xl:w-full xl:flex-col">
        <motion.div className="flex flex-1 flex-wrap justify-start items-start mr-[5rem] xl:mr-0 xl:justify-center xl:items-center">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="text-center flex flex-col m-2 transition duration-300 ease-in-out items-center justify-center 2xl:my-2 2xl:mx-4"
              key={skill.name}
            >
              <div
                className="flex items-center justify-center rounded-full border shadow-lg w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] 2xl:w-[120px] 2xl:h-[120px]"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} className="w-1/2 h-1/2" />
              </div>
              <p className="text-[0.8rem] font-bold mt-1 text-left text-base-dark-gray 2xl:text-[1.75rem] 2xl:mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-1 justify-start items-start flex-col xl:mt-1">
          {experiences.map((experience) => (
            <motion.div
              className="w-full flex flex-row justify-start items-start m-0 my-2"
              key={experience.year}
            >
              <div className="mr-2 sm:mr-5">
                <p className="text-[0.9rem] sm:text-base 2xl:text-[2rem] text-left font-bold text-base-accent">{experience.year}</p>
              </div>
              <motion.div className="flex-1">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col flex-start items-start mb-2 cursor-pointer"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="text-[0.9rem] sm:text-base 2xl:text-[2rem] text-left text-base-dark">{work.name}</h4>
                      <p className="text-[0.8rem] text-left 2xl:text-[1.75rem] text-base-dark-gray mt-[5px]">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'flex-1 flex-col w-full'),
  'skills',
  'bg-white',
)
