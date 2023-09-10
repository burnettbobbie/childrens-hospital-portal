import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import PatientModal from "../components/PatientModal";
import GetPatientMed from "../components/patient/GetPatientMed";
import GetDocNurse from "../components/patient/GetDocNurse";
import GetNotes from "../components/patient/GetPatientNotes";
import Avatar from "../components/patient/Avatar";


export default class Patient extends Component {
    constructor(props){
        super(props);
        this.state={message: "Welcome to the children's portal. Click the hospital to explore! See reception to change avatar!",
                    redirect: null,
                    userReady: false,
                    currentUser: [{ username: "", firstname: "", lastname: ""}],  
                    show1: false,
                    show2: false,
                    show3: false       
    }

    this.showModal1 = this.showModal1.bind(this);
    this.hideModal1 = this.hideModal1.bind(this);
    this.showModal2 = this.showModal2.bind(this);
    this.hideModal2 = this.hideModal2.bind(this);
    this.showModal3 = this.showModal3.bind(this);
    this.hideModal3 = this.hideModal3.bind(this);
    
};

//set modal states: show on show
    showModal1 = () => {
        this.setState({ show1: true });
    };

    hideModal1 = () => {
        this.setState({ show1: false });
    };

    showModal2 = () => {
        this.setState({ show2: true });
        };
        
    hideModal2 = () => {
        this.setState({ show2: false });
    };

    showModal3 = () => {
        this.setState({ show3: true });
        };
        
    hideModal3 = () => {
        this.setState({ show3: false });
    };


    componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser.roles.includes("ROLE_ADMIN")) {
        this.setState({
            redirect: "/Admin" 
        });
        }

    else if (!currentUser){ this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })}

    else {
        this.setState({
            currentUser: currentUser
        });
        }
    }

  
    render(){

        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
          }
          const { currentUser } = this.state;
        return(
        <> 
            <main className="patient-main">
                <div className="top-div">
                    <div className="left-circle"></div>
                    <div className="right-circle"></div>
                </div>
                <div className="title-heading"><h3>{(this.state.message)}</h3> </div>
                <div className="patient-body">
                    {
                        //display user's name
                    }
                    <h3 className="patient-title">{currentUser.firstname +' '+ currentUser.lastname}</h3>                   
                    <div className="patient-buttons">    
                        <div className="patient-progress">
                            {//Show patient notes
                            }
                            <button onClick={this.showModal3}>My Progress</button>
                            <PatientModal show={this.state.show3} handleClose={this.hideModal3}>
                                <GetNotes/>
                            </PatientModal>
                        </div>

                        <div className="skin-changer">
                            <Avatar/>
                        </div>

                        <div className="patient-info">
                            {//Show patient medicine
                            }
                            <button onClick={this.showModal1}>My Medicine</button>
                            <PatientModal show={this.state.show1} handleClose={this.hideModal1}>
                                <GetPatientMed/>
                            </PatientModal>
                            {//Show patient doctors and nurses
                            }
                            <button onClick={this.showModal2}>Doctors & Nurses</button>
                            <PatientModal show={this.state.show2} handleClose={this.hideModal2}>
                                <GetDocNurse/>
                            </PatientModal>
                        </div>
                    </div>
                    {
                        //Navigation to rest of portal and appointments
                    }
                <Link to="/Appointments"><motion.div  whileHover={{ translateY: -7 }}
                        whileTap={{ translateY: -7 }}className="appointment-calendar"></motion.div></Link>
                <Link to="/Home"><motion.div whileHover={{ translateY: -7 }}
                        whileTap={{ translateY: -7 }}className="hosp-icon"></motion.div></Link>
                </div>            
                <Link to="/"><button className="leave-portal"></button></Link>               
            </main>
        </>
        )
    };

}


