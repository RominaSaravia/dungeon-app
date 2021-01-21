import React from 'react'
import StatsPanel from '../StatsPanel'
import beholder from '../../enemyImg/beholder.png'
import './Enemy.css'

function EnemyCaption({ gamestates , monster}) {
  return (
    <div className="container">

      <div className="container-enemy">
        <h3 className="enemy-title">{monster}</h3>
        <div className="container-img container-img-enemy">
          <img alt="Beholder" className="enemy-img" src={beholder} />
        </div>
      </div>

      <StatsPanel gamestates={gamestates} />

    </div>
  )
}
export default EnemyCaption;