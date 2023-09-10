import React from 'react';
import cinemaRoom from '../../images/cinema-room.jpg'
import playArea from '../../images/play-area.jpg'
import Modal from '../../components/Modal';

//Play areas modal
const PlayAreas = ({ closeFn = () => null, open = false }) => {

    return (
      <Modal open={open}>
        <div className="modal--mask">
          <div className="modal-window">
            <header className="modal--header">
              <h2>PLAY AREAS</h2>
            </header>
            <div className="modal--body">
              <p className='modal-text'>
              <img src={playArea}  align="right" hspace="20" VSPACE="50”" alt="play-areas" width="25" height="400"/>
                At Clydeside, the play areas are all located on one floor of the children's wing to make it easy for you to find them. On this floor, there are different play areas designed for different age groups and interests.
                By reception you'll see a brightly colored play area with soft mats and small toys for babies and toddlers. This area is separated from the rest of the play areas to make sure that the little ones are safe and secure.
                If you walk down the hallway, you'll find a play area with board games, puzzles, and books for kids who love to use their imaginations. 
              </p> 
              <p className='modal-text'>Around the corner, you'll find a play area with a slide, a ball pit, and a climbing wall for kids who love to be active. This area is perfect for burning off some energy and having fun with friends.
                Finally, you'll find a video game room with different consoles and games for kids who love to play video games. This room has big screens and comfy chairs, so you can relax while you play. Films are also shown here.
                We hope that the play areas on this floor will make your stay more comfortable and fun!
              <img src={cinemaRoom} id="croom" align="center" alt="play-areas" /> 
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
  
  export default PlayAreas;