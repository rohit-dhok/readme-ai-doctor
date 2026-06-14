import React from 'react'

function CheckListItem(props) {
  return (
    <>
        <section>
            <div className="checklist-container">
                <p>{props.status ? "✅" : "❌"} {props.name}</p>
            </div>
        </section>
    </>
  )
}

export default CheckListItem