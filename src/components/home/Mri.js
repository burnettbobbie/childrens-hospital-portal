
import React from 'react';
import Modal from '../Modal';

//modal showing MRI info
const MRIModal = ({ closeFn = () => null, open = false }) => {
    return (
      <Modal open={open}>
        <div className="modal--mask">
          <div className="modal-window">
            <header className="modal--header">
              <h1>MRI</h1>
            </header>
            <div className="modal--body">
              <p className='modal-text'>An MRI is a special tool that doctors use to take a closer look at different parts of your body. It’s like taking a picture of the inside of your body so that the doctors can see what’s going on. You might have to get an MRI if your doctor needs to learn more about a health problem you might have. 
              Before the MRI starts, you will be asked to lie very still on a table. You will also be given a gown to wear so that the machine can get the best pictures possible. The MRI machine looks like a big donut with a bed that slides through the hole. It’s important to stay very still and not move during the MRI, so the machine can take good pictures. You can listen to music or watch a movie to help you stay calm and relaxed.
              When the MRI starts, you will hear some loud noises, like a banging sound. This is completely normal and nothing to be scared of. The noises will stop once the MRI is finished. The whole process usually takes about 45 minutes to an hour.
              After the MRI, you can go back to your normal activities right away. Your doctor will look at the pictures taken during the MRI to learn more about your body and figure out what’s going on with your health.
              </p>
              <iframe className='modal-vid' width="560" height="315" src="https://www.youtube.com/embed/Q_Pa6KFL1Nw" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
  
  export default MRIModal;