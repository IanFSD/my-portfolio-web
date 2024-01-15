'use client';
import { motion } from 'framer-motion'
import React from 'react'
import aboutImage from '../../public/about.webp'

type Props = {}


export default function ({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    transition={{
        duration: 1.2
    }}
    whileInView={{
        opacity: 1,
    }}
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{
            x:0,
            opacity: 1,
        }}
        src={aboutImage.src}
        className='-mb-20 mb:mb-0 flex-shrink-0 rounded-full object-cover 
        mb:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[500px]'/>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold '>
            Greetings!
            </h4>
            <p className='text-base'>
            I'm Ian Sanchez, a young and versatile web developer dedicated to crafting exceptional digital experiences.
            With a keen eye for design and a knack for coding, I bring creativity and technical expertise to every project.
            I love to explore new technologies and take on challenges that expand my skills. Currently, I am looking for job opportunities as a programmer.
            </p>
        </div>
    </motion.div>
  )
}