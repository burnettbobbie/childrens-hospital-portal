import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';


const CreateAppointment = (props) => {

	const goBack = () => {
		navigate(-1);
	}

  const navigate = useNavigate();
  const { id } = useParams();

//define appointment state with useState hook
  const [appointment, setAppointment] = useState({
    _id:'',
    doctor: '',
    description: '',
    location: '',
    date: '',
    patient: id
  });

  
//event handler sets new appointment
  const handleChange = (event) => {
    const {name, value} = event.target;
    setAppointment({ ...appointment, [name]: value });
  };

//on form submit, post requested new appointment
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/patients/appointments', appointment)
      .then((res) => {
        setAppointment({
          _id:'',
          doctor: '',
          description: '',
          location: '',
          date: '',
          patient: id
        });       
        
      })
      .catch((err) => {
        console.log('Error in CreateAppointment!');
      });
  
  //navigate back to patient details
   navigate(`/User-Records/show-patient/${id}`);
  };


  return (
    <>
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
            User Board
          </Link>
          </li>
          <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Logout
          </Link>
          </li>       
        </div>         
      </nav>
    </div>
    <div className='CreatePatient'>
      <div className='row'>                      
        <div className='admin-form'>
          {
            //Creat Appointment form
          }
          <form noValidate onSubmit={handleSubmit}>

            <div className='form-group'>
              <label>DOCTOR</label>
              <input
                type='text'
                placeholder='doctor'
                name='doctor'
                className='form-control'
                value={appointment.doctor}
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
              <label>DESCRIPTION</label>
              <input
                type='text'
                placeholder='description'
                name='description'
                className='form-control'
                value={appointment.description}
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
              <label>LOCATION</label>
              <input
                type='text'
                placeholder='location'
                name='location'
                className='form-control'
                value={appointment.location}
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
              <label>TIME & DATE</label>
              <input
                type='datetime-local'
                placeholder='time date'
                name='date'
                className='form-control'
                value={appointment.date}
                onChange={handleChange}
              />
            </div>

            <button type='submit' className='crud-options'>CREATE</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default CreateAppointment;
