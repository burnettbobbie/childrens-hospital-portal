import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams,Link } from 'react-router-dom';


const CreatePatient = (props) => {

//function to navigate to previous page
	const goBack = () => {
		navigate(-1);
	}
//use navigate hook
  const navigate = useNavigate();

//user ID from url parameter
  const { id } = useParams();

//define new patient using useState hook
  const [patient, setPatient] = useState({
    _id:'',
    condition: '',
    treatment: '',
    doctor: '',
    nurse: '',
    medication: '',
    patient: id
  });

//event handler to set new patient
  const handleChange = (event) => {
    const {name, value} = event.target;
    setPatient({ ...patient, [name]: value });
  };

//post new patient request on form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/patients', patient)
      .then((res) => {
        setPatient({
          _id:'',
          condition: '',
          treatment: '',
          doctor: '',
          nurse: '',
          medication: '',
          patient: id
        });       
        
      })
      .catch((err) => {
        console.log('Error in CreatePatient!');
      });
  //navigate to patient page
   navigate(`/User-Records/show-patient/${id}`);
  };


  return (
    <>
      <div className="admin-panel">
        {
          //Admin Navigation
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
        {
          //create patient form
        }
          <div className='row'>                      
            <div className='admin-form'>
              <form noValidate onSubmit={handleSubmit}>

                <div className='form-group'>
                  <label>CONDITION</label>
                  <input
                    type='text'
                    placeholder='condition'
                    name='condition'
                    className='form-control'
                    value={patient.condition}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label>TREATMENT</label>
                  <input
                    type='text'
                    placeholder='treatment'
                    name='treatment'
                    className='form-control'
                    value={patient.treatment}
                    onChange={handleChange}
                  />
                </div>

                <div className='form-group'>
                  <label>DOCTOR(S)</label>
                  <input
                    type='text'
                    placeholder='Doctor'
                    name='doctor'
                    className='form-control'
                    value={patient.doctor}
                    onChange={handleChange}
                  />
                </div>

                <div className='form-group'>
                  <label>NURSE(S)</label>
                  <input
                    type='text'
                    placeholder='nurse'
                    name='nurse'
                    className='form-control'
                    value={patient.nurse}
                    onChange={handleChange}
                  />
                </div>

                <div className='form-group'>
                  <label>MEDICATION</label>
                  <textarea
                    type='text'
                    cols="50"
                    rows="2"
                    placeholder='medication'
                    name='medication'
                    className='form-control'
                    value={patient.medication}
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

export default CreatePatient;
