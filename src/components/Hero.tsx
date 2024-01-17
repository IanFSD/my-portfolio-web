'use client';
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/app/api/types/typings';
import { urlFor } from '../../sanity/lib/image';

type Props = {
    pageInfo: PageInfo;
}

function Hero({pageInfo}: Props) {
    const [text,count] = useTypewriter({
        words: ['Hello, I´m Ian Sanchez',
        'iLikeCoffee.ts', 
        'andCicling.js',
    ],
    loop: true,
    delaySpeed:2000,

    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img
            className='relative rounded-full h-32 w-32 mx-auto rounded object-cover'
            src={urlFor(pageInfo.profilePic).url()}
            alt=''
            />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>{pageInfo.role}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3' color='white'>{text}</span>
            <Cursor cursorColor='yellow'/>
            </h1>
            <div>
            <a href="../../public/PDF/CV.pdf" download="CV_IanSanchez.pdf">
            <button className='resumeButton'>Download CV</button>
            </a>
            </div>
            <div className='pt-5'>
                <Link href="#about">
                <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButton'>Projects</button>
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default Hero