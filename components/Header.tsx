'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl: items-center'>
        <motion.div 
        initial={{
            x:-500,
            opacity: 0,
            scale:0.5
        }}
        animate={{x:0,opacity:1,scale:1}}
        transition={{duration:1.5}}
          

        className='flex flex-row items-center'>
            <SocialIcon url='https://www.facebook.com/amanuel.mengistu.75/' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.share.com/amanuelmengistu2429' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.youtube.com/channel/UCYsqdaKrTA_P4WYmlRhyIjg' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.instagram.com/aman_b_t_j/?hl=en' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://x.com/amanuelmengistu2429' fgColor='gray' bgColor='transparent' />



            

        </motion.div>

        
        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        animate={{x:0,
        opacity:1, scale:1}}
        transition={{duration:1.5}}
        className='flex flex-row item-center text-gray-300 cursor-pointer'>
        <SocialIcon 
      
        className='cursor-pointer'
        fgColor='gray' 
        bgColor='transparent'
        network='email' />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400 '>
            GET IN TOUCH
            </p>

        </motion.div>
        
    </header>
  )
}

export default Header