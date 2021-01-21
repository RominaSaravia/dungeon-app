import React from 'react'
import './GameDialogue.css'
import Dialogue from './Dialogue.js'


function GameDialogue({ dialogue=[] }) {
  return (

    <div className="container-dialogue-stats">

      <div className="container-dialogue"> 
      { dialogue.map( (sentence, index) => ( <Dialogue index={index} sentence={sentence}/> )) }

      </div>

    </div>

  )
}

export default GameDialogue;