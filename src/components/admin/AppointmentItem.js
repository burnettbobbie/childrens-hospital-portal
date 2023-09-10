import {React} from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AppointmentItem =(props)=> {

//appointment id taken from URL parameter
  const { id } = useParams();
//appointments array brought in as props from get appointments request
  const appointments = props.appointment;
  const navigate = useNavigate();
  let appointment = appointments;

  //delete appointment by appointment id
  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:5000/api/patients/appointment/${id}`)
      .then((res) => {
        
      })
      .catch((err) => {
        console.log('Error form AppointmentItem_deleteClick');
      });
      //navigate out of user
      navigate('/User-Records/');
  };
  
    return(
    <div>
      {
        //if no appointments exist --> add new appointment 
      }

        {appointments.length === 0 &&
        <>      
          <p className='no-patient'>There are no patient appointments</p>
          <Link to={`/User-Records/create-appointment/${id}`}
              className='btn admin-btn'> + Add New Appointment
          </Link>
        </>}

        {
          //if at least one appointment exists, render details
        }

        {appointments.length === 1 &&
        <>
        {
          //Update or delete appointment
        }
          <div className='crud-container'>
            <h2>APPOINTMENTS</h2>
            <Link to={`/User-Records/edit-appointment/${appointment[0]._id}`}
            className='crud-options'>UPDATE</Link>
            <button
            type='button'
            className='pat-record-button'
            onClick={() => {
              onDeleteClick(appointment[0]._id);
            }}
            >
            Delete Appointment
            </button>
          </div>
          <table className='appointments-table'>
            <tbody>      
              <tr>
                <th scope='row'>Doctor</th>
                <td>{appointment[0].doctor}</td>
              </tr>
              <tr>
                <th scope='row'>Description</th>
                <td>{appointment[0].description}</td>
              </tr>
              <tr>
                <th scope='row'>Location</th>
                <td>{appointment[0].location}</td>
              </tr>
              <tr>
                <th scope='row'>Time & Date </th>
                <td>{appointment[0].date}</td>
              </tr>                 
            </tbody>      
          </table>
          <Link to={`/User-Records/create-appointment/${id}`}
            className='crud-options'> + Add New Appointment
          </Link>        
        </>}
        {
        //if more than one appointments exist, render both
        }
        {appointments.length > 1 &&
        <>
          <div className='crud-container'>
            <h2>APPOINTMENTS</h2>
                <Link to={`/User-Records/edit-appointment/${appointment[0]._id}`}
                className='crud-options'>UPDATE</Link>
            <button
              type='button'
              className='pat-record-button'
              onClick={() => {
                onDeleteClick(appointment[0]._id);
              }}
            >
              Delete Appointment
            </button>
          </div>
          <table className='appointments-table'>
            <tbody>      
              <tr>
                <th scope='row'>Doctor</th>
                <td>{appointment[0].doctor}</td>
              </tr>
              <tr>
                <th scope='row'>Description</th>
                <td>{appointment[0].description}</td>
              </tr>
              <tr>
                <th scope='row'>Location</th>
                <td>{appointment[0].location}</td>
              </tr>
              <tr>
                <th scope='row'>Time & Date </th>
                <td>{appointment[0].date}</td>
              </tr>                 
            </tbody>
          </table>
          <div className='crud-container'>
            <Link to={`/User-Records/edit-appointment/${appointment[1]._id}`}
            className='crud-options'>UPDATE</Link>
          <button
            type='button'
            className='pat-record-button'
            onClick={() => {
              onDeleteClick(appointment[1]._id);
            }}
          >
            Delete Appointment
          </button>
          </div>
          <table className='appointments-table'>
            <tbody>      
              <tr>
                <th scope='row'>Doctor</th>
                <td>{appointment[1].doctor}</td>
              </tr>
              <tr>
                <th scope='row'>Description</th>
                <td>{appointment[1].description}</td>
              </tr>
              <tr>
                <th scope='row'>Location</th>
                <td>{appointment[1].location}</td>
              </tr>
              <tr>
                <th scope='row'>Time & Date </th>
                <td>{appointment[1].date}</td>
              </tr>      
            </tbody>
          </table>  
        </>}
    </div>
    );
  };

  export default AppointmentItem;

 