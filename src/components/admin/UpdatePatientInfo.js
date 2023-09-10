import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


function UpdatePatientInfo(props) {
//define patient record state
  const [patient, setPatient] = useState({
    condition: '',
    treatment: '',
    doctor: '',
    nurse: '',
    medication: '',
    updated_date: '',
  });

//patient record id
  const { id } = useParams();

  const navigate = useNavigate();

//bring up patient info in form
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/patients/${id}`)
      .then((res) => {
        setPatient({
          condition: res.data.condition,
          treatment: res.data.treatment,
          doctor: res.data.doctor,
          nurse: res.data.nurse,
          medication: res.data.medication,
          updated_date: res.data.updated_date,        
        });
      })
      .catch((err) => {
        console.log('Error from Update Patient Info');
      });
  }, [id]);

//event handler set updated patient
  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

//request to update patient data made on form submit
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      condition: patient.condition,
      treatment: patient.treatment,
      doctor: patient.doctor,
      nurse: patient.nurse,
      medication: patient.medication,
      updated_date: patient.updated_date, 
    };

    axios
      .put(`http://localhost:5000/api/patients/${id}`, data)
      .then((res) => {
        navigate(`/User-Records/`);
      })
      .catch((err) => {
        console.log('Error in UpdatePatientInfo!');
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
        //update patient info form
      }
      <div className='admin-form'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='condition'>condition</label>
              <input
                type='text'
                placeholder='condition'
                name='condition'
                className='form-control'
                value={patient.condition}
                onChange={onChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='treatment'>treatment</label>
              <input
                type='text'
                placeholder='treatment'
                name='treatment'
                className='form-control'
                value={patient.treatment}
                onChange={onChange}
              />
            </div>
   
            <div className='form-group'>
              <label htmlFor='doctor'>Doctor(s)</label>
              <input
                type='text'
                placeholder='Doctor'
                name='doctor'
                className='form-control'
                value={patient.doctor}
                onChange={onChange}
              />
            </div>
  

            <div className='form-group'>
              <label htmlFor='nurse'>Nurse</label>
              <textarea
                type='text'
                placeholder='nurse'
                name='nurse'
                className='form-control'
                value={patient.nurse}
                onChange={onChange}
              />
            </div>
 

            <div className='form-group'>
              <label htmlFor='medication'>medication</label>
              <input
                type='text'
                placeholder='medication'
                name='medication'
                className='form-control'
                value={patient.medication}
                onChange={onChange}
              />
            </div>
         

            <div className='form-group'>
              <label htmlFor='publisher'>Date</label>
              <input
                type='date'
                placeholder='date'
                name='updated_date'
                className='form-control'
                value={patient.updated_date}
                onChange={onChange}
              />
            </div>

            <button
              type='submit'
              className='crud-options'
            >
              Update Patient
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdatePatientInfo;
