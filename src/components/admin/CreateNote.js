import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate,useParams, Link } from 'react-router-dom';

const CreateNote = (props) => {

  const navigate = useNavigate();

//Back function for navigation
  const goBack = () => {
		navigate(-1);
	}

//user id comes from url parameter
  const { id } = useParams();

//set new patient note using useState hook
  const [note, setNote] = useState({
    _id:'',
    text: '',
    patient: id
  });

//event handler to set new note
  const handleChange = (event) => {
    const {name, value} = event.target;
    setNote({ ...note, [name]: value });
  };


//patient note post request sent on submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/patients/notes', note)
      .then((res) => {
        setNote({
          _id:'',
          text:  '',
          patient: id
        });       
        
      })
      .catch((err) => {
        console.log('Error in CreatePatient!');
      });

    //navigate to patient record when completed
   navigate(`/User-Records/show-patient/${id}`);
  };


  return (
    <>
    <div className="admin-panel">
      {
        //Admin navigation bar
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
        //Create patient form
      }
      <div className='admin-form'>
        <div className='row'>
            <form noValidate onSubmit={handleSubmit}>             
              <div className='form-group'>
                <textarea
                  type='text'
                  placeholder="patient report..."
                  rows="10"
                  cols="100"
                  name='text'
                  className='form-control'
                  value={note.text}
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

export default CreateNote;
 