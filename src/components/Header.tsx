'use client';
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link';

 function Header() {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,

        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5,
        }}
        className='flex flew-row item-center'>
            <SocialIcon url="https://www.linkedin.com/in/ian-sanchez-b53405250/" fgColor='gray' bgColor='transparent'></SocialIcon>
            <SocialIcon url="https://www.facebook.com/profile.php?id=100011608652031" fgColor='gray' bgColor='transparent'></SocialIcon>
        </motion.div>
        <Link href='#contact'>
        <motion.div
        initial={{
            x:500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1.5
        }}>
            <SocialIcon className='cursor-pointer' fgColor='white' bgColor='transparent' network='email'></SocialIcon>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact Me</p>
        </motion.div>
        </Link>
    </header>
  )
}

export default Header