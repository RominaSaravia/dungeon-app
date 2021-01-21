import React from 'react'
import './ActionButton.css'

function ActionButton({ actionType = "" , createDialogue=()=>{}  }) {
  return(
    <button 
    className="btn btn-secondary"
    actionType={actionType} 
    onClick={()=>{createDialogue(actionType)}} 
    >
      {actionType}</button>
  )
}

export default ActionButton;