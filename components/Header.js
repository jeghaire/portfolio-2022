import { motion } from 'framer-motion'
import { images } from '../constants'
import Image from 'next/image'
import { AppWrap } from '../wrappers'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

function Header() {
  return (
    <section className="flex items-center justify-center flex-1 w-full h-full flex-col md:flex-row  bg-[url('/images/bgIMG.png')] bg-cover bg-repeat bg-center">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-col h-full items-start justify-start my-0 mb-6  mx-4 flex-[0.65] xl:w-full xl:mr-0"
      >
        <div className="flex flex-col items-center my-12 lg:items-end justify-end w-full">
          <div className="py-4 px-4 bg-white rounded-lg flex-row w-auto shadow-sm flex items-center justify-center">
            <span className="text-base-accent text-2xl">😉</span>
            <div className="ml-2 mr-1">
              <p className="text-left text-base-dark-gray text-sm 2xl:text-2xl uppercase leading-6">Hello I&#39;m</p>
              <h1 className="font-bold mt-2 text-base-dark text-3xl text-center leading-6">Mavi</h1>
            </div>
          </div>

          <div className="py-2 px-4 bg-white rounded-lg flex-row w-auto shadow-sm flex-col mt-2 w-full uppercase text-right flex items-center justify-center">
            <p className="w-full uppercase text-left text-base-dark-gray text-sm 2xl:text-2xl leading-6">Web Developer</p>
            <p className="w-full uppercase text-left text-base-dark-gray text-sm 2xl:text-2xl leading-6">Software Engineer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-1 h-full items-end justify-end relative"
      >
        <Image alt="" src={images.profile} className="w-full object-contain z-[1]" />
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          className="w-full object-contain z-[1] absolute left-0 right-0 bottom-0 z-[0] w-full h-11/12 xl:mx-4"
        ><Image alt="" src={images.circle} /></motion.div>
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="flex flex-[0.75] lg:flex-col justify-evenly items-start h-full mt-8 ml-2 w-full flex-row flex-wrap xl:ml-0"
      >
        {[images.react, images.javascript, images.node].map((item, idx) => (
          <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white shadow-sm m-2 even:p-4 first:p-2.5 last:p-1 even:m-6 even:w-[150px] even:h-[150px] last:w-[60px] last:h-[60px] 2xl:first:w-[160pxpx] 2xl:first:h-[160pxpx] 2xl:even:w-[400px] 2xl:even:h-[400px] 2xl:last:w-[200px] 2xl:last:h-[200px]" key={`circle-${idx}`}>
            <Image alt="" src={item} className="w-8/12 h-8/12" />
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default AppWrap(Header, 'home')