'use client'
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='container mx-auto bg-gray-900 rounded-3xl shadow-lg p-5 mb-0 mt-4 sticky top-4 z-50'>
        <nav className=' text-white font-bold'>
            <ul className='flex justify-center items-center gap-6'>
                <li className='active:text-[#1DC4DF] hover:text-[#1DC4DF]'>
                    <Link href="/">Home</Link>
                </li>
                <li className='hover:text-[#1DC4DF]'>
                    <Link href="/about">About</Link>
                </li>
                <li className='hover:text-[#1DC4DF]'>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className='hover:text-[#1DC4DF]'>
                    <Link href="/projects">Projects</Link>
                </li>
            </ul>
        </nav>    
    </div>
  )
}

export default Navbar