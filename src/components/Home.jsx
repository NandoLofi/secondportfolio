import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function Home() {
  return (
    <div name="home" className='bg-[#2A363B] w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#99B898]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Fernando Galvan</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#99B898]'>I am a full-stack software developer</h2>
            <p className='text-[#99B898] py-4 max-w-[700px]'>
            My name is Fernando Galvan and I recently completed my coding boot camp at General Assembly's full-stack academy. I worked many years in other fields such as banking, healthcare and construction but found myself loving programming. I'd love to get speak more about my goals and aspirations, but here are some of the applications I've built.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FECEAB] hover:text-black'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 '/>
                </span>
            
                </button>
            </div>
        </div>

    </div>
  )
}
