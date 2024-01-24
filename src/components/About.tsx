'use client';
import { motion } from 'framer-motion'
import React from 'react'
import { PageInfo } from '@/app/api/types/typings';
import { urlFor } from '../../sanity/lib/image';

type Props = {
    pageInfo: PageInfo;
}


export default function ({pageInfo}: Props) {
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
            Who am I?
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
        src={urlFor(pageInfo.heroImage).url()}
        className='-mb-20 mb:mb-0 flex-shrink-0 rounded-full object-cover 
        mb:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[500px]'/>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold '>
            Greetings!
            </h4>
            <p className='text-base'>
                {pageInfo.backgroundInfo}
            </p>
        </div>
    </motion.div>
  )
}