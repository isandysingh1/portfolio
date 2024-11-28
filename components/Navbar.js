'use client'
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='container mx-auto bg-white rounded-3xl shadow-lg p-5 mb-0 mt-4 sticky top-4'>
        <nav className=' text-black font-bold'>
            <ul className='flex justify-center items-center gap-6'>
                <li className='active:text-gray-500'>
                    <Link href="/">Home</Link>
                </li>
                <li className='hover:text-blue-800'>
                    <Link href="/about">About</Link>
                </li>
                <li className='hover:text-blue-800'>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className='hover:text-blue-800'>
                    <Link href="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar