import React from 'react';
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'
import './Modal.css'


function Modal({ changeModal = () => { } }) {
  return (
    <>
      <div>
        <div className="modal"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
        >

          <div className="modal-dialog" role="document">

            <div className="modal-content">

              <ModalHeader />


              <div className="modal-body">
                <p>Que dificil fue</p>

              </div>

              <ModalFooter changeModal={changeModal}/>



            </div>

          </div>

        </div>

      </div>

      <div className="modal-backdrop fade show"></div>

    </>

  )
}

export default Modal