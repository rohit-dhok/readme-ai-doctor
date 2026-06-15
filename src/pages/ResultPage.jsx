import React, { useState } from 'react'
import ScoreCircle from '../components/ScoreCircle'
import CheckListItem from '../components/CheckListItem'
import SuggestionCard from '../components/SuggestionCard'
import { useLocation, useNavigate } from 'react-router-dom'

function ResultPage() {
  const navitage = useNavigate();
  const location = useLocation();
  const { score, checklist, suggestions } = location.state;
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    let improvedText = "# Suggested Improvements\n\n"

    suggestions.forEach(item => {
      improvedText += `## ${item.title}\n${item.tip}\n\n`
    })

    await navigator.clipboard.writeText(improvedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000);
}

  return (
    <section>
      <div className="score-component">
        <ScoreCircle score={score}/>
      </div>

      <div className="result-grid">
        <div className="checklist-panel">
          <h2>Checklist</h2>
          { checklist.map(item => (
            <CheckListItem key={item.label} name={item.label} status={item.status}/>
          ))}
        </div>

        <div className="suggestion-panel">
          <h2>Suggestions</h2>
          { suggestions.map( item => (
            <SuggestionCard key={item.title} title={item.title} tip={item.tip}/>
          ))}
        </div>
      </div>

      <div className="action-btns">
        <button onClick={handleCopy} className="primary">{copied ? "Copied! ✓" :"Copy Improved Tips"}</button>
        <button onClick={()=> navitage('/')} className="secondary">Analyze Another</button>
      </div>
    </section>
  )
}

export default ResultPage