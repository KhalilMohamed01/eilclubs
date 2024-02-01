import React, { useState } from "react";
import { IoMdReturnLeft } from "react-icons/io";


export default function Dialog({ trigger, children }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>

      <div onClick={toggleModal}>
        {trigger}
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {children}
            <div onClick={toggleModal} className='close-modal card logout-button'>
          
            <IoMdReturnLeft />
        </div> 
        </div>
        </div>
      )}

    </>
  );
}