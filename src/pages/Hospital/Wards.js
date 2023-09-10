import React from 'react';
import Modal from '../../components/Modal';
import Ward from '../../images/Ward3.jpg';


//Wards Modal
const Wards = ({ closeFn = () => null, open = false }) => {
    return (
      <Modal open={open}>
        <div className="modal--mask">
          <div className="modal-window">
            <header className="modal--header">
              <h2>WARDS</h2>
            </header>
            <div className="modal--body">
              <p className='modal-text'>
              <img src={Ward} alt='ward' align="right"/>The wards are bedrooms where kids can get the medical care they need to feel better. The nurses and doctors there work hard to make sure each room is comfortable and welcoming. Some rooms have bright colors on the walls and funny posters hanging up to make kids laugh. Others have fun toys and games to play with. In the children's hospital, there are different wings or "wards" for kids with different illnesses or injuries. Some wards are for kids who need surgery, while others are for kids who have special needs or illnesses. No matter which ward a child is in, they are always taken care of with lots of love and support.</p>
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
  
  export default Wards;