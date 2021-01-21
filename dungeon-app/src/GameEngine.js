let vida = 100;
const MaxLife = 100;
//Enemy states
let enemyLife = 200;
let enemyAlive = true;
//Player states
let alive = true;
let poisoned = false;
let burnt = false;
//NPC actions
let atack = 0;
let burn = 1;
let poison = 2;
let fail = 3;
//Player actions
let slash = 0;
let pierced = 1;
let cut = 2;
let stumble = 3;
// Objects
let pocion = 0;
let colaFenix = 1;
let pocionQuemaduras = 2;
let antidoto = 3;


let statesData = {}

export function usarItem(actionType, callback) {
  let type;
  let frase;
  switch (actionType) {
    case "Pocion":
      type = 0
      break;

    case "Cola de Fenix":
      type = 1
      break;

    case "Pocion quemaduras":
      type = 2
      break;

    case "Antidoto":
      type = 3
      break;

    default: type = 0
      break;
  }

  if (type === pocion) {
    if(alive){
      vida += 50;
      frase = "Te has curado";
    }else {
      frase = "Ya estas muerto";

    }
    if (vida > MaxLife) vida = MaxLife
  }

  if (type === colaFenix) {
    if (alive === false) {
      alive = true;
      vida = 80;
    } else {
      frase = "Ya estas vivo, no se puede usar";
    }
  }

  if (type === pocionQuemaduras) {
    if (burnt === true) {
      burnt = false;
      frase = "Vuelves a estar bien";
    } else {
      frase = "No estas quemado";
    }

  }
  if (type === antidoto) {
    if (poisoned === true) {
      poisoned = false;
      frase = "Vuelves a estar bien";

    } else {
      frase = "No se puede usar";

    }
  }

  showStats(CB => {
    statesData = CB
  });

  return callback(frase, statesData)


}

export function showStats(CB) {
  //Data will be send as callback
  let data = {
    playerState: [100, ""],
    enemyState: [200, ""]
  }
  //Check if player is alive
  if (alive === true) {
    data.playerState[0] = vida;
    data.playerState[1] = "Vivo";

    if (poisoned === true) {
      data.playerState[1] = "Envenenado";
    }
    if (burnt === true) {
      data.playerState[1] = "Quemado";
    }


  } else {
    data.playerState[0] = vida;
    data.playerState[1] = "Muerto";

  }

  //Check if enemy is alive
  if (enemyAlive === true) {
    data.enemyState[0] = enemyLife;
    data.enemyState[1] = "Vivo";
  } else {
    data.enemyState[0] = enemyLife;
    data.enemyState[1] = "Muerto";

  }


  return CB(data);

}

export function GameTurn(_actionType, callback) {
  let data = []

  playerTurn(play => data.push(play));

  enemyTurn(play => data.push(play));

  showStats(CB => {
    statesData = CB
  });

  return callback(data, statesData);


}

export function resetEnemyState(cb){
  let data = {
    playerState: [100, "Vivo"],
    enemyState: [200, "Vivo"]
  }

  enemyLife = 200;
  vida = 100;
  enemyAlive = true;
  alive = true

  return cb(data)

}

function playerTurn(callback) {
  let PlayerTurn = Math.floor(Math.random() * 4);

  if (vida <= 0) {
    alive = false;
  }

  if (enemyLife <= 0) {
    enemyAlive = false;
  }

  if (alive === true && enemyAlive === true) {

    if (burnt || poisoned) {
      vida -= 10;
    }

    if (PlayerTurn === slash) {
      enemyLife -= 20;
      const frase = "Atacas";
      return callback(frase)
    }

    if (PlayerTurn === pierced) {
      enemyLife -= 40;
      const frase = "Atacas, fue crítico";
      return callback(frase)

    }

    if (PlayerTurn === cut) {
      enemyLife -= 10;
      const frase = "Atacas, parece que no hizo mucho daño";
      return callback(frase)
    }

    if (PlayerTurn === stumble) {
      const frase = "Te tropiezas, y fallas";
      return callback(frase)
    }

  } else {
    const frase = "Ya no puedes atacar";
    return callback(frase)
  }

}

function enemyTurn(callback) {
  let NPCTurn = Math.floor(Math.random() * 4);

  if (vida <= 0) {
    alive = false;
  }

  if (enemyLife <= 0) {
    enemyAlive = false;
  }


  if (alive === true && enemyAlive === true) {
    if (NPCTurn === atack) {
      vida -= 20;
      const frase = "El NPC ha atacado";
      return callback(frase)
    }

    if (NPCTurn === burn) {
      burnt = true;
      const frase = "El NPC te ha quemado";
      return callback(frase)

    }

    if (NPCTurn === poison) {
      poisoned = true;
      const frase = "El NPC te ha envenenado";
      return callback(frase)
    }

    if (NPCTurn === fail) {
      const frase = "El NPC ha fallado";
      return callback(frase)
    }

  } else {
    const frase = "Ya no se mueve";
    return callback(frase)
  }

}