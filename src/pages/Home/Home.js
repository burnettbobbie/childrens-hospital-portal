import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import ModalManager from "../../components/Modals";
 import ShowFacts from "../../components/home/DYK"; 
import HospIcon from '../../images/hospIcon.webp';


const Home =() =>{

//modal open/close
const [modalOpen, setModal] = useState(false);

const openModal = event => {
    event.preventDefault();
    const {
    target: {
        dataset: { modal }
    }
    } = event;
    if (modal) setModal(modal);
};

const closeModal = () => {
    setModal('');
};
    
    return(
        <>     
        <div className="app-modals" onClick={openModal}>
            {
            //Modal Manager determines which data modal value is opened
            } 
            <ModalManager closeFn={closeModal} modal={modalOpen} />       
        </div>
        
        <main className="home-main">        
            <div className="top-div">
                <div className="left-circle"></div>
                <div className="right-circle"></div>
            </div>
            {
                //title banner text
            }
            <div className="title-heading"><h3>Welcome to Clydeside Children's Hospital portal! Click the hospital to find out more! </h3> </div>

            <div className="home-body">
                {
                //Mobile/ Tablet hospital information modal container
                }
                <div className="hospital-mobile">
                    <img src={HospIcon} alt="hospital" width={15} height={150}/>
                    <div className="mobile-modals">
                        <div data-modal="wards-modal" onClick={openModal}>WARDS</div>
                        <div data-modal="clinics-modal" onClick={openModal}>CLINICS</div>
                        <div data-modal="theatres-modal" onClick={openModal}>THEATRES</div>                         
                        <div data-modal="play-modal" onClick={openModal}>PLAY</div>   
                    </div>                        
                </div>
                {
                    //Fact container for desktop and tablet
                }                                              
                <div className="didYouKnow">
                    <div className="dyk-container">
                        <h4>DID YOU KNOW?</h4>
                        <ShowFacts/>                              
                    </div>
                </div>

                {
                    //Fact container for mobile
                }
                <div className="dyk-mobile">
                    <h2>DID YOU KNOW?</h2>
                    <ShowFacts/>
                </div>

                {
                    //Desktop hosptial information modal container
                }
                <div className="starback">                       
                    <input className="menu-toggler" type="checkbox"/>
                    <label for="menu-toggler"></label>
                    <ul className="menu-list">
                        <li className="menu-item">
                        <Link to ="/Entertainment"><div data-modal="wards-modal" onClick={openModal}>WARDS</div></Link>
                        </li>
                        <li className="menu-item">
                        <Link to="/Entertainment"><div data-modal="clinics-modal" onClick={openModal}>CLINICS</div></Link>
                        </li>
                        <li className="menu-item">
                        <Link to="/Entertainment"><div data-modal="theatres-modal" onClick={openModal}>THEATRES</div></Link>
                        </li>
                        <li className="menu-item">
                        <Link to="/Entertainment"><div data-modal="play-modal" onClick={openModal}>PLAY</div></Link>
                        </li>
                    </ul>                                            
                </div>
                {
                    //Treatment information modals
                }
                <div className="treatment-info">
                    <div className="treatment blood">
                    <motion.h1  whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }} data-modal="blood-modal" onClick={openModal}>BLOOD</motion.h1>
                    </div>
                    <div className="treatment xray">
                    <motion.h1  whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }} data-modal="xray-modal" onClick={openModal}>XRAY</motion.h1>
                    </div>
                    <div className="treatment mri"><motion.h1  whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }} data-modal="mri-modal" onClick={openModal}>MRI</motion.h1>
                    </div>
                </div>
                {
                    //Portal navigation
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
        
            <Link to="/Patient"><button className="profile-icon"></button></Link>          
        </main>
        </>
            
    )
}


export default Home;