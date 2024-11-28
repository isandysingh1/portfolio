'use client'

import React from 'react'
import Image from 'next/image'
import Projects from './Projects'
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { HeroWords } from './ui/herowords';
const HomeComponent = () => {
  const words = [
    { text: "Software-Designer" },
    { text: "||" },
    { text: "Developer" },
    { text: "||" },
    { text: "Learner" },
  ];
  return (
        <div className='p-0'>
            <Image      
            src="/images/image.JPG" 
            alt="Satnam Singh" 
            width={200}
            height={200} 
            className='rounded-full mb-12 hover:scale-110 transition-all duration-500 cursor-pointer hover:border-2 border-[#1DC4DF]' />
            <HeroWords words={words} />
            <p className='text-gray-500 text-2xl mt-5'>I am a software designer and developer with a passion for creating innovative solutions to complex problems. I am a quick learner and always looking for new challenges to tackle.</p>
            <div className='flex justify-center items-center gap-8 mt-10'>
                <IoLogoInstagram className='text-4xl text-blue-800 hover:text-blue-500 hover:scale-110 transition-all duration-500 cursor-pointer' />
                <IoLogoWhatsapp className='text-4xl text-blue-800 hover:text-blue-500 hover:scale-110 transition-all duration-500 cursor-pointer' />
                <IoLogoGithub className='text-4xl text-blue-800 hover:text-blue-500 hover:scale-110 transition-all duration-500 cursor-pointer' />
                <IoLogoLinkedin className='text-4xl text-blue-800 hover:text-blue-500 hover:scale-110 transition-all duration-500 cursor-pointer' />
            </div>
            <Projects />
        </div>
  )
}

export default HomeComponent;