import React from 'react'

function ScoreCircle(props) {

  function getScoreColor(score) {
    if (score >= 90) {
      return "#6EE7B7";
    } else if (score >= 70) {
      return "#FBBF24";
    } else if (score >= 50) {
      return "#F97316";
    } else {
      return "#F87171";
    }
  } 

  function getScoreLabel(score) {
    if (score >= 90) {
      return "Excellent";
    } else if (score >= 70) {
      return "Good";
    } else if (score >= 50) {
      return "Needs Work";
    } else {
      return "Poor";
    }
  }

  return (
    <section>
        <div className="scoreCircle-container">
            <div className="score-circle" style={{borderColor: getScoreColor(props.score)}}>
                <h2 style={{color: getScoreColor(props.score)}}>{props.score}</h2>
                <p>/100</p>
            </div>
            <p style={{color: getScoreColor(props.score)}}>{getScoreLabel(props.score)}</p>
        </div>
    </section>
  )
}

export default ScoreCircle