import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthService from '../../services/auth.service';
import Appointments from './Appointments';


function GetAppointments() {
    
  const [appointments, setAppointments] = useState([]);
  //get current user
  const currentUser = AuthService.getCurrentUser();
  //current user id
  const id  = currentUser.id;
      
  //get patient appointment info by user id
    useEffect(() => {

        const fetchAppointments = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5000/api/patients/patient/appointment/${id}`);
            setAppointments(response.data);
          } catch (err) {
            console.log(`error from get patient appointment`);
          }
        };
    
        fetchAppointments();
      }, [id]);
    
    //map appointments
    const AppointmentList =
      appointments.length === 0
        ? 'there is no patient record!'
        :  appointments.map((appointment, k) => <Appointments appointment={appointment} key={k} />);

  return (
    //render appointment info
    <div>{AppointmentList}</div>
  );
}

export default GetAppointments;
