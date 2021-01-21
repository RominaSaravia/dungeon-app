import React from 'react'
import './StatsPanel.css'

function StatsPanel({ gamestates = {} }) {
  return (
    <div className="container-stats">

      <div className="enemy stats-panel">
        <p className="title stats-title">BEHOLDER</p>
        <p className="life" >{gamestates.enemyState[0]}</p>
        <p className="state">{gamestates.enemyState[1]}</p>
      </div>

      <div className="player stats-panel">
        <p className="title stats-title" >JUGADOR</p>
        <p className="life">{gamestates.playerState[0]}</p>
        <p className="state">{gamestates.playerState[1]}</p>
      </div>
      
    </div>
  )
}

export default StatsPanel