import React from 'react';

const DocNurse = (props) => {

//patient props from getDocNurse
    const patients = props.patient;
    let patient = patients[0];

    return(
      <div>
        {
          //if no patient record exists, display message
        }
        {patients.length === 0 &&
          <p className='update-message'>Doctor will update user record shortly</p>     
        }
        {
          //if patient record exists, show doctor and nurse
        }
        {patients.length > 0 &&
        <>            
          <table className='patient-table'>
            <tbody>      
              <tr>
                <td>DOCTOR</td>
                <td>{patient.doctor}</td>
              </tr>
              <tr>
                <td>NURSE</td>
                <td>{patient.nurse}</td>
              </tr>
            </tbody>
          </table>
        </>
        }
      </div>
    );
};

export default DocNurse;
