import React, { Component } from 'react';
import ActionMenu from './Components/ActionMenu';
import EnemyCaption from "./Components/Enemy";
import GameDialogue from './Components/GameDialogue';
import Modal from './Components/Modal';
import Nav from './Components/Nav';

import { usarItem, GameTurn, resetEnemyState } from './GameEngine.js'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      dialogue: ["Bienvenido", "Ataca o utiliza objetos con los botones"],
      gamestates:
      {
        playerState: [100, "Vivo"],
        enemyState: [200, "Vivo"]
      },
      actionType: "",
    }

  }

  changeModal = (_event) => {
    this.setState({ showModal:!this.state.showModal });

    resetEnemyState(cb => {
      let gamestates = this.state.gamestates

      gamestates.playerState = cb.playerState;
      gamestates.enemyState = cb.enemyState;

      this.setState({ gamestates });

    })
  
  }

  createDialogue = (actionType) => {
    let dialogue = this.state.dialogue;
    let gamestates = this.state.gamestates

    if (actionType === "Enemy") {
      GameTurn(actionType, (frase, cbstates) => {
        dialogue.push(frase[0]);
        dialogue.push(frase[1]);

        gamestates.playerState = cbstates.playerState;
        gamestates.enemyState = cbstates.enemyState;

        this.setState({ dialogue, gamestates });

        if(gamestates.enemyState[0] <= 0) {
          this.changeModal()
        }


      })

    } else {
      usarItem(actionType, (frase, cbstates) => {
        dialogue.push(frase);

        gamestates.playerState = cbstates.playerState;
        gamestates.enemyState = cbstates.enemyState;

        this.setState({ dialogue, gamestates })

      })

    }


  }


  render() {
    const {monster = "Desconocido" } = this.props;
    return (

      <div className="app"  >
        <Nav />
        <EnemyCaption monster={monster} gamestates={this.state.gamestates} />

        <GameDialogue dialogue={this.state.dialogue} />

        <ActionMenu createDialogue={this.createDialogue} />

        {this.state.showModal && <Modal
        changeModal={this.changeModal} />}

      </div>

    )

  }
}

export default Landing