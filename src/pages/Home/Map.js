
import React from 'react';
import Modal from '../../components/Modal';

// Map Modal

const Map = ({ closeFn = () => null, open = false }) => {
    return (
      <Modal open={open}>
        <div className="modal--mask">
          <div className="map-modal">
            <div className='map-type'>
              <button className="modal-close" type="button" onClick={closeFn}>
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  };
  
  export default Map;