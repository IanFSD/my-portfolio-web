'use client';
import { Project } from '@/app/api/types/typings';
import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../../sanity/lib/image';

type Props = {
    projects: Project[];
}

function Projects({projects}: Props) {
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
            Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
            z-20 scrollbar scrollbar-track-gray-400/20
            scrollbar-thumb-[#F7AB0A] scrollbar-thin'>
           {projects.map((project) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex-col space-y-5
                   items-center justify-center  p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{
                        y: -300,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        opacity: 1,
                        y:0
                    }}
                    viewport={{
                        once: true
                    }}
                    src={urlFor(project.image).url()} className='relative rounded-full h-32 w-32 mx-auto rounded object-cover'/>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                                {project.title}
                                </span>
                            </h4>
                            <div className='flex items-center space-x-2 justify-center  rounded-full'>
                            {project?.technologies?.map(technology => (
                                <img key={technology._id} className='max-h-10 max-w-10' src={urlFor(technology.image).url()} />
                            ))}
                            </div>
                            <p className='text-lg text-center md:text-left'>
                                {project.summary}
                            </p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]'/>
    </motion.div>
  )
}

export default Projects