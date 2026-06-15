import React, { useState } from 'react'
import { analyzeReadme } from '../utils/scorer'
import { getAISugesttions } from '../utils/ai_client'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'


function HomePage() {
  const [readmeText, setReadmeText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleAnalyzeBtn() {
    if (readmeText.trim().length === 0) {
      alert("Please paste your README first!");
      return;
    }
    setIsLoading(true);
    const result = analyzeReadme(readmeText);
    const suggestions = await getAISugesttions(readmeText);
    navigate('/result', {
      state: {
        score: result.score,
        checklist: result.checklist,
        suggestions: suggestions
      }
    })
  }

  return (
    <section>
      <div className="home-container">
        <div className="hero">
          <h1>Is your README good enough?</h1>
          <p>Paste it below to find out!</p>
        </div>

        <textarea onChange={(e) => setReadmeText(e.target.value)} name="" id="" placeholder='paste README here...'></textarea>

        <div className="home-buttons">
          {isLoading ? <LoadingSpinner/> : <button onClick={handleAnalyzeBtn} className='btn-analyze'>Analyze README</button>}
          <button className='btn-tryExample'>Try Example</button>
        </div>
      </div>
    </section>
  )
}

export default HomePage