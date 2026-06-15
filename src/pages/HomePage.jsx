import React from 'react'
import { analyzeReadme } from '../utils/scorer'

function HomePage() {
  console.log(analyzeReadme("## Installation \n ## Usage \n shields.io"))
  return (
    <section>
      <div className="home-container">
        <div className="hero">
          <h1>Is your README good enough?</h1>
          <p>Paste it below to find out!</p>
        </div>

        <textarea  name="" id="" placeholder='paste README here...'></textarea>

        <div className="home-buttons">
          <button className='btn-analyze'>Analyze README</button>
          <button className='btn-tryExample'>Try Example</button>
        </div>
      </div>
    </section>
  )
}

export default HomePage