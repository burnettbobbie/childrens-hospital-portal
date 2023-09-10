import React from 'react';

const Appointments = (props) => {

  // appointments props from fetch appointments 
    const appointments = props.appointment;
    let appointment = appointments;

    return(
      <div>
        {
          //if there are no appointments, display message
        }
      {appointments.length === 0 && 
        <h3>No upcoming appointments</h3>
      }
      {
        //if there an appointment exists, show info and link to add another
      }
      {appointments.length === 1 &&
        <>
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
        </>}
        {
          //if two appointments exist, render both
        }
         {appointments.length > 1 &&
        <>
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

export default Appointments;
