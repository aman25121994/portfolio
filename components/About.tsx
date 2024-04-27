import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import about from '../app/images/about.jpg'


function About() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
        max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <Image
        initial={{x:-200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        viewport={{once: true}}
        transition={{duration: 1.2,}}
        src={about} alt=""
        className='-mb-20 md;mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-62 xl:w-[200px] xl:h-[200px]'
        />

        <div className='space-y-10 md:px-10'>
          <h4 className='text-4xl font-semibold'>
            Here is a <span className='underline decoration-[#F7AB0A]/50'> little</span>{" "} about me
          </h4>
          <p className='text-base'>
            I am a full stack developer with experience in building web applications using JavaScript and TypeScript. My primary focus lies on the backend side of development where I have developed APIs in NodeJS/Express
          </p>
        </div>

        </motion.div>
  )
}

export default About