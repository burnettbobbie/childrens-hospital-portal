import {React} from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';


const PatientItem =(props)=> {

//patient record id taken from url parameter
  const { id } = useParams();
//patient props from get patients request
    const patients = props.patient;
    const navigate = useNavigate();
//user patient record = first index in patients array
    let patient = patients[0];

//delete patient record by record id
    const onDeleteClick = (id) => {
      axios
        .delete(`http://localhost:5000/api/patients/${id}`)
        .then((res) => {
         
        })
        .catch((err) => {
          console.log('Error form ShowPatientDetails_deleteClick');
        });
        navigate('/User-Records/');
    };
  
  return(
    <div>
      {
        //if no patient record exists --> message and link to create new record
      }
        {patients.length === 0 &&
        <>      
          <p className='no-patient'>There is no patient record</p>
          <Link to={`/User-Records/create-patient/${id}`}
              className='btn admin-btn'> + Add New Record
          </Link>
        </>}
        {
          //if patient record exists, render details
        }
        {patients.length > 0 &&
          <>
          <div className='crud-container'>
            <h2>PATIENT RECORD</h2>
            {
              //update patient record
            }
              <Link to={`/User-Records/edit-patient/${patient._id}`}
              className='crud-options'>EDIT RECORD</Link>
            {
              //delete patient record
            }
            <button
              type='button'
              className='pat-record-button'
              onClick={() => {
                onDeleteClick(patient._id);
              }}
            >
              Delete Patient Record
            </button>
            <div className='updated-date'>
              <p>Last Updated: {new Date(patient.updated_date).toLocaleDateString()}</p>
            </div>
          </div>
          <table className='patient-table'>
            <tbody>      
              <tr>
                <th scope='row'>CONDITION: </th>
                <td>{patient.condition}</td>
              </tr>
              <tr>
                <th scope='row'>TREATMENT: </th>
                <td>{patient.treatment}</td>
              </tr>
              <tr>
                <th scope='row'>DOCTOR(s): </th>
                <td>{patient.doctor}</td>
              </tr>
              <tr>
                <th scope='row'>NURSE(s): </th>
                <td>{patient.nurse}</td>
              </tr>
              <tr>
                <th scope='row'>MEDICATION:</th>
                <td>{patient.medication}</td>
              </tr>
            </tbody>        
          </table>        
          </>}
    </div>
    );
  };

  export default PatientItem;

 