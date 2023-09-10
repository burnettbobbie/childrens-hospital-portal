import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import UserItem from './UserItem';
import PatientItem from './PatientItem';
import NoteItem from './NoteItem';
import PhotoItem from './PhotoItem';
import AppointmentItem from './AppointmentItem';

function ShowPatientDetails(props) {

  const navigate = useNavigate();

//function to navigate back one page
	const goBack = () => {
		navigate(-1);
	}
//define all objects
  const [users, setUsers] = useState([]);
  const [patients, setPatients] = useState([]);
  const [notes, setNotes] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [appointments, setAppointments] = useState([]);
//user id
  const { id } = useParams();

  useEffect(() => {
//get user by user id
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/patients/user/${id}`
        );
        setUsers(response.data);
      } catch (err) {
        console.log(`error from showPatientDetails`);
      }
    };
    fetchUsers();
//get patient record by user id
    const fetchSavedPatients = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/patients/patient/${id}`
        );
        setPatients(response.data);
      } catch (err) {
        console.log(`error from showPatientDetails`);
      }
    };
    fetchSavedPatients();
//get patient notes by user id
    const fetchNotes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/patients/patient/note/${id}`
        );
        setNotes(response.data);
      } catch (err) {
        console.log(`error from showPatientDetails`);
      }
    };
    fetchNotes();
//get patient photo by user id
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/patients/patient/photo/${id}`
        );
        setPhotos(response.data);
      } catch (err) {
        console.log(`error from showPatientDetails`);
      }
    };
    fetchPhotos();

//get patient appointments by user id    
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/patients/patient/appointment/${id}`
        );
        setAppointments(response.data);
      } catch (err) {
        console.log(`error from showPatientDetails`);
      }
    };
    fetchAppointments();

  }, [id]);

//map through all objects
  const UserList =
  users.length === 0
    ? 'there is no user record!'
    : users.map((user, k) => <UserItem user={user} key={k} />);

  const PatientList =
  patients.length === 0
    ? 'there is no patient record!'
    : patients.map((patient, k) => <PatientItem patient={patient} key={k} />);
  
  const NotesList =
    notes.length === 0
      ? 'there is no patient note!'
      : notes.map((note, k) => <NoteItem note={note} key={k} />);
  
  const PhotosList =
    photos.length === 0
    ? 'there is no patient photo!'
    : photos.map((photo, k) => <PhotoItem photo={photo} key={k} />);
  
  const AppointmentsList =
    appointments.length === 0
    ? 'there are no patient appointments!'
    : appointments.map((appointment, k) => <AppointmentItem appointment={appointment} key={k} />);

   

  return (
    <div className='ShowPatientDetails'>
        <div className="admin-panel">
          {
            //admin navigation
          }
          <nav className="admin-nav">
            <div className="user-nav">
              <button className="back-btn" onClick={goBack}> GO BACK </button>
              <li className="nav-item">
                <Link to={"/Admin"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link to={"/User-Records"} className="nav-link">
                  Patients
              </Link>
              </li>
              <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Logout
              </Link>
              </li>       
            </div>       
          </nav>
          <p className="patient-name">
            {
              //display patient's name
            }
          {UserList}</p>  
        </div>
        <div >
          <div className='patient-table' >
            {
              //show patient record, photo, appointments and notes
            }
            {PatientList}
            {PhotosList}
            {AppointmentsList}
          </div>
          {NotesList}         
        </div>     
    </div>
  );
}

export default ShowPatientDetails;

