'use client';
import { motion } from 'framer-motion'
import React from 'react'
import { Skill as SkillType } from '@/app/api/types/typings';
import { urlFor } from '../../sanity/lib/image';

type Props = {
    direccionLeft?:boolean;
    skill: SkillType;
}

function Skill({direccionLeft,skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer flex-col'>
        <motion.img
        initial={{
            x: direccionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{
            duration:1
        }}
        whileInView={{
            opacity: 1, 
            x:0
        }}
        src={urlFor(skill.image).url()}
        className='rounded-full border border-gray-500 object-cover flex justify-center items-center
         w-20 h-20 xl:w-32 xl:h-32 filter grow group-hover:grayscale transition duration-300 ease-in-out align-center'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
            group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full text-black font-bold'>
            <a href={skill.link} target='_blank'>
            <p>
                {skill.title}
            </p>
            </a>
        </div>
        </div>
    </div>
  )
}

export default Skill