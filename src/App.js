import React from 'react'
import "./App.css"
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Features from './components/features/features'
import Types from './components/types/types'
import Bmi from './components/bmi/bmi'
import Blog from './components/blog/blog'

export default function App() {
  return (
    <div className='components__container'>
      <Navbar />
      <Hero />
      <Features />
      <Types />
      <Bmi />
      <Blog />
    </div>
  )
}
