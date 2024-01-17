'use client';
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCards';
import { Experiences } from '@/app/api/types/typings';
import { fetchExperience } from '@/app/api/fetchExperiences';

type Props = {
    experiences: Experiences[];
}

function Experience({experiences}: Props) {
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
    max-w-7xl px-10 justify-center mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]'>
        {experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience}/>
        ))}
        </div>
    </motion.div>
  )
}

export default Experience;

