import React from 'react';

const PatientMed = (props) => {
    //patient props from GetPatientMed
    const patients = props.patient;
    let patient = patients[0];

    return(
      <div>
        {
          //if no patient record exists, display message
        }
        {patients.length === 0 &&
        <p className="update-message">Doctor will update user record shortly</p>     
        }
        {
          //if patient record exists, show medication
        }
        {patients.length > 0 &&
        <>  
          <table className='patient-table'>
            <tbody>      
              <tr>
                <td>MEDICATION</td>
                <td>{patient.medication}</td>
              </tr>                   
            </tbody>
          </table>
        </>}
      </div>
    );
};

export default PatientMed;
