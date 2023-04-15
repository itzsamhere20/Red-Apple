import React from 'react'
import Navbar from './navbar/navbar'
import Hero from './hero/hero'
import Features from './features/features'
import Types from './types/types'
import Bmi from './bmi/bmi'
import Blog from './blog/blog'

export default function Home() {
  return (
    <div id='home'>
        <Navbar/>
        <Hero />
        <Features/>
        <Types/>
        <Bmi/>
        <Blog />
    </div>
  )
}
