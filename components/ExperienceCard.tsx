import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import arba from '../app/images/arba.png'
import vs from '../app/images/vs.jpg'
import react from '../app/images/react.jpg'
import javascript from '../app/images/javascript.jpg'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-300 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <Image
            initial={{y:-100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once: true}}
        transition={{duration: 1.5}} 
        className="w-32 h-32 rounded-full xl:w-[90px] xl:h-[90px] object-cover object-center" src={arba} alt="" />
    
    <div className='px-0 md:px-10'>
        <h4 className='text-1xl font-light'>Software Engineering Student</h4>
        <p className='font-light text-1xl mt-1'>4th Year</p>
        <div className='flex space-x-2 my-2'>
            <Image className='w-10 h-10 rounded-full' src={react} alt=""  />
            <Image className='w-10 h-10 rounded-full' src={vs} alt="" />
            <Image className='w-10 h-10 rounded-full' src={javascript} alt="" />
            
        </div>

    </div>
    
    </article>
    
  )
}