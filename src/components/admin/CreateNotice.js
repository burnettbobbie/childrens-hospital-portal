import React, { useState} from 'react';
import axios from 'axios';


const CreateNotice = (props) => {
  
// Define notice state with useState hook
  const [notice, setNotice] = useState({
    _id:'',
    text: '',
    created_by: ''
  });

// Event handler to set new notice
  const handleChange = (event) => {
    const {name, value} = event.target;
    setNotice({ ...notice, [name]: value });
  };

// Post new notice request on form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/patients/notices', notice)
      .then((res) => {
        setNotice({
          _id:'',
          text:  '',
          created_by: ''
        });       
        
      })
      .catch((err) => {
        console.log('Error in create notice!');
      });
  
 // refresh page after request
      window.location.reload()
  };

  return (
    <>  
    <div className='admin-form'>
      {
        //create notice form
      }
      <form noValidate onSubmit={handleSubmit}>             
        <div className='form-group'>
          <textarea
            type='text'
            placeholder="message..."
            rows="7"
            cols="20"
            name='text'
            className='form-control'
            value={notice.text}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder="name"
            name='created_by'
            className='form-control'
            value={notice.created_by}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='post'>POST</button>
      </form>
    </div>
    </>
  );
};

export default CreateNotice;
 