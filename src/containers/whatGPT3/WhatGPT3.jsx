import React from 'react'
import { Feature } from '../../components'
import './WhatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3_whatgpt3 section_margin" id="wgpt3">
      <div className="gpt3_whatgpt3-feature">
        <Feature />
      </div>
      <div className="gpt3_whatgpt3-heading">
        <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3_whatgpt3-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatGPT3