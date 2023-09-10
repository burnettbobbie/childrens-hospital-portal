import React from 'react';

const Notes = (props) => {

  //notes props from GetPatientNotes
    const notes = props.note;
    let note = notes[0];

    return(
      <div>
        {
          //if no notes exist, display message
        }
        {notes.length === 0 &&
        <p className='update-message'>Doctor will update user record shortly</p>     
        }
        {
          //if notes exists, show text
        }
        {notes.length > 0 &&
        <>  
          <table className='patient-table'>
            <tbody>      
              <tr>
                <td>{note.text}</td>
              </tr>
              {
                //convert Mongo Date to user-friendly format
              }
              <tr>
                <td className='text-right'>{new Date(note.created).toLocaleDateString()}</td>
              </tr>                    
            </tbody>
          </table>
        </>}
      </div>
    );
};

export default Notes;
