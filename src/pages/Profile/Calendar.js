import React from 'react';
import Calendar from 'react-calendar';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import GetAppointments from '../../components/patient/GetAppointments';

const Appointment =() => {

  return (
    <> 
        <main className='patient-main'>
            <div className="top-div">
                <div className="left-circle"></div>
                <div className="right-circle"></div>
            </div>
            {
                //title banner text
            }
            <div className="title-heading">
                <h3>Upcoming Appointments</h3>
            </div>

            <div className="patient-body">
                <div className='calendar-spacer'>
                </div>
                <div className="appointments-container">
                    <div className='calendar-container'>
                        <Calendar/>
                    </div>
                    <div className='upcoming-app'>
                        <h2>YOUR APPOINTMENTS</h2>
                        <GetAppointments/>
                    </div>
                </div>
                    {
                        //navigational icons
                    }
                <Link to="/Appointments"><div className="appointment-calendar"></div></Link>
                <Link to="/Home"><motion.div whileHover={{ translateY: -5 }}
                    whileTap={{ translateY: -7 }}className="hosp-icon"></motion.div></Link>
            </div>
        
            <Link to="/Patient"><button className="profile-icon"></button></Link>       
        </main>
    </>   
  );
}

export default Appointment;