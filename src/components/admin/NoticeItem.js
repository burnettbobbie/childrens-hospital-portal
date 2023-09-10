import {React} from 'react';
import axios from 'axios';

const NoticeItem =(props)=> {

  //notice props from get notices request
  const notice = props.notice;

  //delete notice by notice id
  const onDeleteClick = () => {

    axios
      .delete(`http://localhost:5000/api/patients/notice/${notice._id}`)
      .then((res) => {
      
      })
      .catch((err) => {
        console.log('Error form notice_deleteClick');
      })
  //refresh page
      window.location.reload(true);
  };

  return(
    <>
    {
      //render notice item
    }
      <div className='notice-item'>
        <p>{notice.text}</p>
        <h3>:</h3>
        <p>{notice.created_by}</p>
        <button type="button "className='bin-icon' onClick={() => {
          onDeleteClick(notice._id);
        }}>
        </button>
        {
          //convert notice date to user-friendly format
        }
        <p id="notice-created">{new Date(notice.created).toLocaleDateString()}</p>      
      </div>
    </>
    );
            
  };

  export default NoticeItem;

 