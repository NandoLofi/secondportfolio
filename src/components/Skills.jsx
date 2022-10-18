import React from 'react'
import Django from '../assets/django.png'
import Postgres from '../assets/postgresql.png'
import Reactjs from '../assets/react.png'
import Node from '../assets/nodejs.png'
import JavaScript from '../assets/javascript.png'
import Python from '../assets/python.png'
import Mongo from '../assets/mongo.png'
import CSharp from '../assets/csharp.png'

export default function Skills() {
  return (
    <div name='skills' className='bg-[#2A363B] text-gray-300'>
        <div className='m-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full lg:w-[1150px]'>
            <div>
                <p className='text-4xl font-bold border-b-4 py-4 border-red-400'>Skills</p>
                <p className='py-4'> These are the technologies I have used to build applications </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-lg shadow-black hover:scale-110 duration-500' >
                <img src={Django} alt='djangoimg' className='w-20 mx-auto'/>
                <p className='my-4'>Django</p>
                </div>
                <div className='shadow-lg shadow-black hover:scale-110 duration-500' >
                <img src={Postgres} alt='postgresimg' className='w-20 mx-auto'/>
                <p className='my-4'>Postgres</p>
                </div>
                <div className='shadow-lg shadow-black hover:scale-110 duration-500' >
                <img src={Reactjs} alt='reactimg' className='w-20 mx-auto'/>
                <p className='my-4'>RreactJS</p>
                </div>
                <div className='shadow-lg shadow-black hover:scale-110 duration-500' >
                <img src={Node} alt='nodeimg' className='w-20 mx-auto'/>
                <p className='my-4'>Node.js</p>
                </div>
                <div className='shadow-lg shadow-black hover:scale-110 duration-500' >
                <img src={JavaScript} alt='jsimg' className='w-20 mx-auto'/>
                <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-lg shadow-black hover:scale-110 duration-500' >
                <img src={Python} alt='pythonimg' className='w-20 mx-auto'/>
                <p className='my-4'>Python</p>
                </div>
                <div className='shadow-lg shadow-black hover:scale-110 duration-500' >
                <img src={Mongo} alt='mongoimg' className='w-20 mx-auto'/>
                <p className='my-4'>Mongo</p>
                </div>
                <div className='shadow-lg shadow-black hover:scale-110 duration-500' >
                <img src={CSharp} alt='csharpoimg' className='w-20 mx-auto'/>
                <p className='my-4'>C#</p>
                </div>
            </div>
        </div>
    </div>
  )
}
