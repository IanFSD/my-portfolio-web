'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { Experiences } from '@/app/api/types/typings';
import { urlFor } from '../../sanity/lib/image';


type Props = {
    experience: Experiences;
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div>
        <motion.img
        initial={{
            y:-100,
            opacity: 0
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{
            opacity: 1, y:0
        }}
        viewport={{
            once: true,
        }}
        className='w-32 h-32 rounded-full md:rounded-full xl:w[200px] xl:h[200px]
         object-cover object-center'
        src={urlFor(experience.companyImage).url()}/>
        </div>
        <div className='px-0 md:px-10 '>
            <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'></p>
            <div className='flex space-x-2 my-2'>
                {experience?.technologies?.map((technology:any,i) => (
                    <img
                    key={`${technology._id}-${i}`}
                    className='h-10 w-10 rounded-full'
                    src={urlFor(technology.image).url()} />
                ))}
            </div>
            <p className='uppercase py-5 text-grey-300 '>
                {new Date(experience.dateStarted).toDateString()} - {" "} 
                {experience.isCurrentlyWorkingThere 
                ? 'Present'
                : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg h-54 overflow-y-scroll
                scrollbar-thin  scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                {experience?.points?.map((point:any,i:any) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}