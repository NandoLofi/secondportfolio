import React from 'react'

export default function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#2A363B]  flex justify-center items-center'>
        <form action="https://getform.io/f/7283f465-9f00-44bb-ba02-6c9f5dbb5b3c" method='post' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-400 text-gray-300'>
                    Contact Me
                </p>
                <p className='text-gray-300 py-4'> Subimt form Below || Email Me: n.brighter00@gmail.com </p>
            </div>
            <input type="text" placeholder='Name' name='name' className='my-4 p-2 bg-gray-300'/>
            <input type="text" placeholder='Email' name='email'  className='my-4 p-2 bg-gray-300 '/>
            <textarea name="message" className='my-4 p-2 bg-gray-300' placeholder='Message' rows="10"></textarea>
            <button className='text-white border-2 hover:bg-[#FECEAB] hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>We'll Talk Soon</button>
        </form>
    </div>
  )
}
