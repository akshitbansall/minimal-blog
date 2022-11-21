import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Head from 'next/head'

const work = () => {
  return (

    <><Head>
        <title>
        minimalism
        </title>
    </Head><div>
        <Hero heading='beauty in simplicity.' message='drink coffee, create stuff...' />
        <Portfolio />
      </div></>
  )
}

export default work