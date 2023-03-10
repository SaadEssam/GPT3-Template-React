import React from 'react'
import './App.css'
import { Navbar, Brand, CTA } from './components'
import { Header, WhatGPT3, Features, Possibility, Blog, Footer } from './containers'

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App