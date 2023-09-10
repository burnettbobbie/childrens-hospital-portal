import React, { useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const UploadAvatar = () => {
    const goBack = () => {
		navigate(-1);
	}
  // Define the state with useState hook
  const navigate = useNavigate();
  
  //user id
  const { id } = useParams();
  
  //define new photo 
  const [newAvatar, setNewAvatar] = useState(
        {
            photo: '',
            patient: id
        }
    );
 //post data on form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newAvatar.photo);
        formData.append('patient', newAvatar.patient);

        axios.post('http://localhost:5000/api/patients/users/photo/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
        navigate(`/User-Records/show-patient/${id}`);
    }

  //event handler to set new photo
    const handlePhoto = (e) => {
        setNewAvatar({...newAvatar, photo: e.target.files[0]});
    }

    return (
        <>
        <div className="admin-panel">
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
        {
          //upload file form
        }
        <form className='admin-form' onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />
            <input 
                type="submit"
            />
        </form>
        </>

    );
}

export default UploadAvatar;