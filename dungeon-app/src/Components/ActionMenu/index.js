import React from 'react'
import ActionButton from '../Actionbutton'
import PlayerTurn from '../PlayerTurn'
import './ActionMenu.css'

function ActionMenu({ createDialogue = ()=> {} , changeModal = ()=> {} }) {
  return (
    <>

      <div className="container-actions">

        <PlayerTurn createDialogue={createDialogue} actionType="Enemy" />

        <ActionButton createDialogue={createDialogue} actionType="Pocion" />
        <ActionButton createDialogue={createDialogue} actionType="Cola de Fenix" />
        <ActionButton createDialogue={createDialogue} actionType="Pocion quemaduras" />
        <ActionButton createDialogue={createDialogue} actionType="Antidoto" />

      </div>

    </>

  )
}

export default ActionMenu;