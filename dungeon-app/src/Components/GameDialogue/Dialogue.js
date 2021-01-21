import React from 'react';


function Dialogue( {index, sentence }) {
  return(
    <p className="sentence" key={`dialogue-sentence-${index}`} >{sentence}</p>
)

}

export default Dialogue;