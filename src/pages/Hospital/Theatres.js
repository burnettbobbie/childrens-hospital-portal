import React from 'react';
import Modal from '../../components/Modal';

//Theatres Modal
const Theatres = ({ closeFn = () => null, open = false }) => {
    return (
      <Modal open={open}>
        <div className="modal--mask">
          <div className="modal-window">
            <header className="modal--header">
              <h2>THEATRES</h2>
            </header>
            <div className="modal--body">
              <p className='modal-text'>Hospital theatres are special rooms where doctors and nurses perform operations and procedures to help people who are sick or hurt. These rooms are also called operating rooms or ORs for short.
              When someone needs surgery, they will be taken to the hospital theatre. Here, they will be given special medicine to keep them asleep and pain-free while the doctors and nurses work to fix the problem. These medicines are called anaesthesia.
              Hospital theatres are very clean and sterile to help prevent germs and infections. Doctors and nurses wear special clothes called scrubs, masks, and gloves to help keep everything clean.
              Being in the hospital theatre may seem scary, but the doctors and nurses are there to help you. They will talk to you and your family about the procedure and answer any questions you may have. They are very good at what they do and will do everything they can to make sure you are safe and healthy.
              </p>
            </div>
            <footer className="modal--footer">
              <button className="modal-close" type="button" onClick={closeFn}>
                Close
              </button>
            </footer>
          </div>
        </div>
      </Modal>
    );
  };
  
  export default Theatres;