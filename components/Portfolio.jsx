import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>want simple things...</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='https://images.unsplash.com/photo-1524126675694-1efa3488b7c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1548031076-e0f45007f853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1543363897-27912ebb8daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1535902239711-b9b478eea2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;