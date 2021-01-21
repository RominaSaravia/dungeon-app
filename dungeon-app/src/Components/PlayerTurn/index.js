import React from 'react';
import './PlayerTurn.css'

function PlayerTurn({ actionType = "" , createDialogue=()=>{} }) {
  return (

    <button 
    className="btn btn-primary"
    actionType={actionType} 
    onClick={()=>{createDialogue(actionType)} } >Atacar</button>

  )
}

export default PlayerTurn;