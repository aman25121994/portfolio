import React from 'react'
import Image from 'next/image'
import python from '../app/images/python.jpg'

type Props = {}

export default function PythonSkill({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <Image 
        initial={{opacity: 0}}
        transition={{ duration:1}}
        whileInView={{opacity: 1, x: 0}}
        src={python} alt=''
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-11 xl:h-11 filter group-hover:grayscale transition duration-300 ease-in-out'
        
         />
         <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 
         ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-11 xl:h-11 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
               <p className='text-1xl font-bold text-black opacity-100'>75%</p>
          </div>
         </div>
    </div>
  )
}