import React from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px]  flex justify-between items-center px4 bg-[#FECEAB] text-black' >
        <div>
            <h1 style={{fontSize: '30px', fontWeight: 'bold'}} className='px-4 overline'>FG</h1>
        </div>
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='md:hidden z-10 px-4' onClick={handleClick}>
            {!nav ? <FaBars/>: <FaTimes/>}
        </div>
        <ul className={!nav ? 'hidden': 'absolute top-0 lef-0 w-full h-screen flex flex-col justify-center items-center bg-[#99B898]'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] lef-0'>
            <ul>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-14px] duration-300 bg-[#99B898]'>
                    <a className='flex justify-between items-center w-full text-black-300' href="/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-14px] duration-300 bg-[#FECEAB]'>
                    <a className='flex justify-between items-center w-full text-black-300' href="/">
                        GitHub<FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-14px] duration-300 bg-[#FF847C]'>
                    <a className='flex justify-between items-center w-full text-black-300' href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-14px] duration-300 bg-[#E84A5F]'>
                    <a className='flex justify-between items-center w-full text-black-300' href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
