import React from 'react';
import Modal from '../Modal';

//modal displaying information about having blood taken
const BloodModal = ({ closeFn = () => null, open = false }) => {
    return (
      <Modal open={open}>
        <div className="modal--mask">
          <div className="modal-window">
            <header className="modal--header">
              <h1>Blood</h1>
            </header>
            <div className="modal--body">
              <p className='modal-text'>Your doctor may have asked you to have a blood test to help find out what has made you feel unwell. They may also want to check that your blood is doing what it should do. You may be invited to a community clinic where you will meet a phlebotomist who are trained to do blood tests for children of all ages; even babies.
              Some children have to have blood tests every few weeks to make sure that they are keeping healthy. This is usually because the test will check to see that their medication is doing its job correctly.</p>
              <iframe className="modal-vid" width="560" height="315" src="https://www.youtube.com/embed/2Ag2adsLh3Y" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
  
  export default BloodModal;