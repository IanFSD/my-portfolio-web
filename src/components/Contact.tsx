'use client';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  };
function Contact({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => (
        window.location.href =
         `mailto:isanchez2077@gmail.com?subject=${formData.subject}&message=${formData.message}`
    );
  return (
    <div     
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <div className='flex flex-col space-y-10 relative justify-center items-center h-screen '>
            <h4 className='text-4xl font-semibold text-center '>
                If you have a offer.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>here is my contact info.</span>
            </h4>
            <div className='space-y-10 '>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+45 71 55 02 70</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>isanchez2077@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>Poppelstykket 50</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' type='text' className='contactInput'/>
                    <input {...register('email')} placeholder='Email' type='email' className='contactInput'/>
                </div>

                <input {...register('subject')} placeholder='Subject' type='text' className='contactInput'/>

                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact