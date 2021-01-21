import React from 'react'

function ModalFooter({ changeModal = () => {} }) {
  return(
    <div className="modal-footer">
    <button
      className="btn btn-primary"
      onClick={changeModal}> Jugar </button>
  </div>
  )
}

export default ModalFooter;