import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <div name="home" className='bg-[#2A363B] md:h-screen w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#99B898]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Fernando Galvan</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#99B898]'>I am a full-stack software developer</h2>
            <p className='text-[#99B898] py-4 max-w-[700px]'>
            Thank you for coming on by!
            </p>
            <div>
                <Link to="projects" smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FECEAB] hover:text-black'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 '/>
                </span>
            
                </button>
                </Link>
            </div>
        </div>

    </div>
  )
}
