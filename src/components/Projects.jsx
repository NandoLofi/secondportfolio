import React from 'react'
import Lofi from '../assets/lofi.jpeg'
import Crypto from '../assets/crypto.jpg'
import TvShow from '../assets/tvshow.jpg'


export default function Projects() {
  return (
    <div name='projects' className='w-full bg-[#2A363B] md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-400'>Projects</p>
                <p className='py-6'> My Recent Projects </p>
            </div> 

            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


                <div style={{backgroundImage: `url(${Lofi})`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content__div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider' >
                            ReactJS Application <br/> w/Redux
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://legendary-palmier-cc51ed.netlify.app/" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'> Demo</button>
                            </a>
                            <a href="https://github.com/NandoLofi/lofi-store" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700' >Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Crypto})`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content__div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ReactJS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://leafy-pika-ad0d4d.netlify.app/" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'> Demo</button>
                            </a>
                            <a href="https://github.com/NandoLofi/currency-app" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700' >Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${TvShow})`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content__div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Django Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://simple-movie-app1.herokuapp.com/" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'> Demo</button>
                            </a>
                            <a href="https://github.com/NandoLofi/movie-app-django" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700' >Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
