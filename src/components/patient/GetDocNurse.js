import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthService from '../../services/auth.service';
import DocNurse from './DocNurse';


function GetDocNurse() {
    
    const [patients, setPatients] = useState([]);
    //get current user
    const currentUser = AuthService.getCurrentUser();
    // current user id
    const id  = currentUser.id;
    
    //get patient record by user id
    useEffect(() => {

        const fetchSavedPatients = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5000/api/patients/patient/${id}`);
            setPatients(response.data);
          } catch (err) {
            console.log(`error from get patient`);
          }
        };
    
        fetchSavedPatients();
      }, [id]);
    
    //map patient records
      const PatientList =
      patients.length === 0
        ? 'there is no patient record!'
        : patients.map((patient, k) => <DocNurse patient={patient} key={k} />);


  return (
  //render patient staff
    <div>{PatientList}</div>
  
  );
}

export default GetDocNurse;
