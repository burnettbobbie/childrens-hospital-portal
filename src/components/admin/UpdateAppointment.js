import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


function UpdateAppointment(props) {
//define patient record state
  const [appointment, setAppointment] = useState({
    doctor: '',
    description: '',
    location: '',
    date: ''
  });

//patient appointment id
  const { id } = useParams();

  const navigate = useNavigate();

//bring up appointment info in form
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/patients/appointments/${id}`)
      .then((res) => {
        setAppointment({
            doctor: res.data.doctor,
            description: res.data.description,
            location: res.data.location,
            date: res.data.date      
        });
      })
      .catch((err) => {
        console.log('Error from Update Appointment');
      });
  }, [id]);

//event handler set updated appointment
  const onChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

//request to update appointment data made on form submit
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      doctor: appointment.doctor,
      description: appointment.description,
      location: appointment.location,
      date: appointment.date
    };

    axios
      .put(`http://localhost:5000/api/patients/appointment/${id}`, data)
      .then((res) => {
        navigate(`/User-Records/`);
      })
      .catch((err) => {
        console.log('Error in UpdateAppointment!');
      });
      
  };

//function to navigate back one page  
  const goBack = () => {
		navigate(-1);
	};

  return (
    <>
    <div className="admin-panel">
      <nav className="admin-nav">
        {
          //admin navigation
        }
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
    <div className='UpdatePatientInfo'>
      {
        //update appointment info form
      }
      <div className='admin-form'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='doctor'>doctor</label>
              <input
                type='text'
                placeholder='doctor'
                name='doctor'
                className='form-control'
                value={appointment.doctor}
                onChange={onChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='description'>description</label>
              <input
                type='text'
                placeholder='description'
                name='description'
                className='form-control'
                value={appointment.description}
                onChange={onChange}
              />
            </div>
   
            <div className='form-group'>
              <label htmlFor='location'>location</label>
              <input
                type='text'
                placeholder='location'
                name='location'
                className='form-control'
                value={appointment.location}
                onChange={onChange}
              />
            </div>
  

            <div className='form-group'>
              <label htmlFor='date'>Time & Date</label>
              <textarea
                type='datetime-local'
                placeholder='time and date'
                name='date'
                className='form-control'
                value={appointment.date}
                onChange={onChange}
              />
            </div>     

            <button
              type='submit'
              className='crud-options'
            >
              Update Appointment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateAppointment;
