import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar =() => {

    const [nav, setNav]= useState(false)
    const [color, setColor] =useState('transparent')
    const [textColor, setTextColor] =useState('white')

    const handleNav=()=> {
        setNav(!nav)
    }

useEffect(() =>{
    const changeColor = () =>{
        if(window.scrollY>=90){
            setColor('#ffffff')
            setTextColor('#000000')
        } else{
            setColor('transparent')
            setTextColor('#ffffff')
        }
    }
    window.addEventListener('scroll', changeColor)
}, [])



return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
          minimalism...
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>home</Link>
          </li>
          <li className='p-4'>
            <Link href='/#gallery'>simple</Link>
          </li>
          <li className='p-4'>
            <Link href='/work'>basic</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>contact</Link>
          </li>
        </ul>

        
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: 'black' }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color:  'black'}} />
          )}
        </div>
        
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link className='text-black' href='/'>home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link className='text-black' href='/#gallery'>simple</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link className='text-black' href='/work'>basic</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link className='text-black' href='/contact'>contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar