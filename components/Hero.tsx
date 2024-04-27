import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import meImage from '../app/images/meImage.png'



type Props = {}

function Hero({}: Props) {
    const [text,count]=useTypewriter({
        words:["Hi I'm Amanuel","& I am","Developer","Designer","Creator",],
        loop: true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image
        className='relative rounded-full h-32 w-32 mx-auto object-cover' 
        src={meImage}
        alt="Me" /> 

        <div className='z-20 '>
          <h2 className='text-sm uppercase textgray-500 pb-2 tracking-[15px]'>
            Software Engineer
           </h2>

          <h1 className='text-5xl lg:text-6xl font-semibold px-10'> 
         <span className='mr-3'>{text}</span>
           <Cursor cursorColor="#F7ABBA"/>
         </h1>

        <div className='pt-5'>

          <a href="#about"><button className='heroButton'>About</button></a>
          <a href="#experience"><button className='heroButton'>Experience</button></a>
          <a href="#skills"><button className='heroButton'>Skills</button></a>
          <a href="#projects"><button className='heroButton'>Projects</button></a>
          <a href="#contacts"><button className='heroButton'>Contact</button></a>
        </div>


       </div>

    </div>
  )
}

export default Hero