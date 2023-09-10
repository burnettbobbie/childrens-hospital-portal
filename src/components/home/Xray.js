import React from 'react';
import Modal from '../Modal';


//modal showing XRAY info
const XrayModal = ({ closeFn = () => null, open = false }) => {
    return (
      <Modal open={open}>
        <div className="modal--mask">
          <div className="modal-window">
            <header className="modal--header">
              <h1>XRAY</h1>
            </header>
            <div className="modal--body">
              <p className='modal-text'>
              An X-ray is a test that doctors use to take pictures of the inside of your body. It’s like taking a photo, but instead of a camera, they use a special machine that sends radiation through your body to capture the image. You might need an X-ray if your doctor needs more information about a health problem you might have.
              The process of getting an X-ray is simple and quick. The doctor or technician will ask you to stand, sit, or lie down on a table depending on which part of your body is being examined. They will then position the X-ray machine to take pictures of that area. To get clear pictures, you will need to stay still and hold your breath for a few seconds.
              X-rays are painless, but you may feel a little uncomfortable if you have to move in a certain way or if the machine is placed close to a sore spot. The radiation used in an X-ray is small and safe, but if you’re pregnant, it’s important to let your doctor know before the test.
              After the X-ray, you can go back to your normal activities right away. Your doctor will look at the pictures taken during the X-ray to learn more about your body and figure out what’s going on with your health. If you have
              </p>
              <iframe className="modal-vid" width="560" height="315" src="https://www.youtube.com/embed/J6Po-Uc7IPY" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
  
  export default XrayModal;