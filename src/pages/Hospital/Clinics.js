import React from 'react';
import Modal from '../../components/Modal';

//Clinics Modal
const Clinics = ({ closeFn = () => null, open = false }) => {
    return (
      <Modal open={open}>
        <div className="modal--mask">
          <div className="modal-window">
            <header className="modal--header">
              <h2>CLINICS</h2>
            </header>
            <div className="modal--body">
              <p className='modal-text'>Clinics at hospitals are special places where children go to see doctors and get their health checked. The doctors and nurses in the clinic help kids who are sick or have health problems. They give medicine if needed, and they also talk with kids to help them feel better about their health. Some clinics are just for certain health problems like allergies, asthma or diabetes. Other clinics are for checkups to make sure kids are growing and healthy. Going to a clinic can be scary, but it’s important to remember that the doctors there are there to help you and make you feel better.</p>
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
  
  export default Clinics;