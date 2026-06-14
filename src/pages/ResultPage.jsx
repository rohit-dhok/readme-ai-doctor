import React from 'react'
import ScoreCircle from '../components/ScoreCircle'
import CheckListItem from '../components/CheckListItem'
import SuggestionCard from '../components/SuggestionCard'

function ResultPage() {
  return (
    <section>
      <div className="score-component">
        <ScoreCircle/>
      </div>

      <div className="result-grid">
        <div className="checklist-panel">
          <h2>Checklist</h2>
          <CheckListItem name="License" status={true}/>
          <CheckListItem name="Format" status={false}/>
    
        </div>

        <div className="suggestion-panel">
          <h2>Suggestions</h2>
          <SuggestionCard title="License" tip="Add License MIT"/>
          <SuggestionCard title="Content" tip="Use minimal details"/>
        </div>
      </div>

      <div className="action-btns">
        <button className="primary">Copy Improved README</button>
        <button className="secondary">Analyze Another</button>
      </div>
    </section>
  )
}

export default ResultPage