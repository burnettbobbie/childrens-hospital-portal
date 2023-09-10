import React, { useState,  useEffect  } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';


const UpdateNote = (props) => {

//define note  
  const [note, setNote] = useState({
    text: '',
    created:''
  });

  const navigate = useNavigate();
  
//patient note id from url parameter
  const { id } = useParams();

//update patient note by note id
 useEffect(() => {
    axios
        .get(`http://localhost:5000/api/patients/notes/${id}`)
        .then((res) => {
            setNote({
                text: res.data.text,
                created:res.data.created
            });
        })
        .catch((err) => {
            console.log('Error from Update Note');
        });

  }, [id]);

// event handler to set note
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

// update request sent on form submit
  const onSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
        text: note.text,
        created: note.created
    };

    axios
    .put(`http://localhost:5000/api/patients/note/${id}`, data)
    .then((res) => {
        navigate(`/User-Records/`);
    })
    .catch((err) => {
        console.log('Error in Update Note!');
    })

  };

//function to navigate back one page
  const goBack = () => {
    navigate(-1);
  }

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
          //Update patient note form
        }
        <div className='row'>
          <div className='admin-form'>
            <form noValidate onSubmit={onSubmit}>
                <div className='form-group'>
                <label htmlFor='text'>condition</label>
                <textarea
                    type='text'
                    rows="10"
                    cols="50"
                    placeholder='text'
                    name='text'
                    className='form-control'
                    value={note.text}
                    onChange={onChange}
                />
                </div>
                <br />

                <div className='form-group'>
                <label htmlFor='created'>date</label>
                <input
                    type='date'
                    placeholder='date'
                    name='created'
                    className='form-control'
                    value={note.created}
                    onChange={onChange}
                />
                </div>
                <br />            
                <button
                type='submit'
                className='crud-options'>    
                SAVE
                </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateNote;
 