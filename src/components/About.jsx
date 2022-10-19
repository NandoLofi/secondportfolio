import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#2A363B] md:h-screen text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-400'> About </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='sm:text-right text-3xl font-bold'>Hola, I'm Fernando or you can call me Nando. It's nice to see you here. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                        I recently completed my coding boot camp at General Assembly's full-stack academy. I worked many years in other fields such as banking, healthcare and construction but found myself loving programming. I'd love to speak more about my goals and aspirations, but for now I hope you enjoy!.
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}
