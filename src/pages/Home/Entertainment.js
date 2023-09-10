import Chat from '../../components/games/Chat';
import React, { useState} from "react";
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import ModalManager from "../../components/Modals";
import Youtube from '../../images/you-tube.png';

const Entertainment =() =>{

    //modal open/close
    const [modalOpen, setModal] = useState(false);
    const openModal = event => {
      event.preventDefault();
      const { target: {
            dataset: { modal }
            }} = event;
      if (modal) setModal(modal);
    };
  
    const closeModal = () => {
      setModal('');
    };
    return(
    <>{
        //load modal manager to determine which data-modal value to open
    }
        <div className="app-modals" onClick={openModal}> 
            <ModalManager closeFn={closeModal} modal={modalOpen} />       
        </div>
        
        <main className="home-main">
            <div className="top-div">
                <div className="left-circle"></div>
                <div className="right-circle"></div>
            </div>
            {
                //title text banner
            }
            <div className="title-heading"><h3>Chat! Watch Videos!</h3> </div>

            <div className="home-body">
            
                {/* <div id='space'></div> */}
                    <div className='entertainment'>
                        {
                            //youtube link
                        }
                    <a href="https://www.youtube.com/"><img src={Youtube} alt='youtube' id="youtube"/></a>
                    {
                        //OpenAI chat
                    }
                    <Chat/>
                    </div>
                    {
                        //navigational icons + map modal3
                    }
        
                <div className="bottom-nav">
                    <div className="bottom-i">
                    <Link to="/Entertainment"><motion.div whileHover={{ translateY: -10 }}
                        whileTap={{ translateY: -10 }}className="tv-icon"></motion.div></Link>
                    </div>
                    <div className="bottom-i">
                    <Link to="/Games"><motion.div whileHover={{ translateY: -10 }}
                        whileTap={{ translateY: -10 }}className="console-icon"></motion.div></Link>
                    </div>
                    <div className="bottom-i">
                    <motion.div whileHover={{ translateY: -10 }}
                        whileTap={{ translateY: -10 }} className="map-icon" data-modal="map-modal" onClick={openModal}></motion.div>
                    </div>
                </div>
            </div>
                <Link to="/Home"><button className="home-back" ></button></Link>                   
        </main>
    </>
    )
}

export default Entertainment