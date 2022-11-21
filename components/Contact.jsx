import Head from 'next/head'
import React from 'react'

const Contact = () => {
  return (
    
    <>
    <Head>
    <title>minimalism</title>
    </Head>
    <>
    </><div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'>small progress is still progress...</h1>
        <form className='max-w-[600px] m-auto'>
          <div className='grid grid-cols-2 gap-2'>
            <input className='border shadow-lg p-3' type="text" placeholder='name' />
            <input className='border shadow-lg p-3' type="email" placeholder='email' />
          </div>
          <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='subject' />
          <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='some good words...'></textarea>
          <button className='border shadow-lg p-3 w-full mt-2'>submit</button>
        </form>
      </div></>
  )
}

export default Contact