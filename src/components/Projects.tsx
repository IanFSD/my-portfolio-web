'use client';
import { motion } from 'framer-motion'
import React from 'react'
import projectImage from '../../public/portfolioImage4.jpg'

type Props = {}

function Projects({}: Props) {
    const projects = [
        {id:1,value:1},
        {id:2,value:2},
        {id:3,value:3}]
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
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
            z-20'>
           {projects.map((project,i) => (
                <div key={project.id} className='w-screen flex-shrink-0 snap-center flex-col space-y-5
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
                    src={projectImage.src} className='relative rounded-full h-32 w-32 mx-auto rounded object-cover'/>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Test {i + 1} of {projects.length}</span>
                            </h4>

                            <p className='text-lg text-center  md:text-left'>
                              Each and everything on your deckstop has been taken by the hackers at this unknown IP. In order to get your files back and delete this wirus, hold the windows and press the letter R, R as in Romeo. 
                              Then type dablu dablu dablu DOT madarchod dot com and you will then need to purchase our protection package which is $499 for 1 year ok? After you purchase our protection for $999 we will delete the hackers 
                              and you will get your files back. If you do not purchase our protection in the next 3 days then syskey will run and the hackers will delete your pc.  
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