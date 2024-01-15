'use client';
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import profileImage from '../../public/about.jpg'
import Image from 'next/image';

type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: ['Hello, I´m Ian Sanchez',
        'Full Stack Developer', 
        'Full Stack Engineer',
    ],
    loop: true,
    delaySpeed:2000,

    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image src={}/>
        <h1>
        <span color='white'>{text}</span>
        <Cursor cursorColor='yellow'/>
        </h1>
    </div>
  )
}

export default Hero