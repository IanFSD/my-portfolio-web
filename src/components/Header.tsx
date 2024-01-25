'use client';
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { Social } from '@/app/api/types/typings';
import Link from 'next/link';

type Props = {
    socials: Social[];
}

 function Header({socials}:Props) {
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
            {socials?.map((social) => (
            <SocialIcon key={social._id} url={social.url} fgColor='gray' bgColor='transparent'/>
            ))}
        </motion.div>
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
            <SocialIcon href="#contact" className='cursor-pointer' fgColor='white' bgColor='transparent' network='email'>
            </SocialIcon>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact Me</p>
        </motion.div>
    </header>
  )
}

export default Header