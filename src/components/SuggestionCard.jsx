import React from 'react'

function SuggestionCard(props) {
  return (
    <section>
        <div className="suggestion-container">
            <div className="suggestion-card">
                <p>{props.title}</p>
                <p>{props.tip}</p>
            </div>
        </div>
    </section>
  )
}

export default SuggestionCard