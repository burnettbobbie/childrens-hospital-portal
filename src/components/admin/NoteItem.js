import {React} from 'react';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';


const NoteItem =(props)=> {

  //note ID from url parameter
  const { id } = useParams();
  //note array props taken from get notes request
  const notes = props.note;
  //first note array index is patient note
  let note = notes[0];

  //delete note by note id
  const onDeleteClick = (id) => {

    axios
      .delete(`http://localhost:5000/api/patients/note/${id}`)
      .then((res) => {
        
      })
      .catch((err) => {
        console.log('Error form ShowPatientDetails_deleteClick');
      })
  //refresh page
      window.location.reload(true);
  };

  return(
    <div>
      {
        //if no notes exist --> message with add note link
      }
        {notes.length === 0 &&
       <>      
          <p className='no-patient'>There are no patient notes</p>
        <Link to={`/User-Records/create-note/${id}`}
            className='btn admin-btn'> + Add New Note
        </Link>
     
        </>}
      {
        //if patient note exists, render details
      }
        {notes.length > 0 &&
          <>
            <h4 className='notes-title'>PATIENT NOTES (patient view): </h4>       
            <div className='notes'> 
                <p id='notes-text'>{note.text}</p>  
                {
                  //delete note
                }       
                <button
                type='button'
                className='note-delete'
                onClick={() => {
                  onDeleteClick(note._id);
                }}
                >
                Delete
                </button>
                {
                  //update note
                }
                <Link to={`/User-Records/edit-note/${note._id}`}
                className='crud-note'>edit</Link>
                {
                  //convert date to user friendly format
                }   
                <p id='updated-note'>Created:{new Date(note.created).toLocaleDateString()}</p>
            </div>       
          </>}
    </div>
    );
            
  };

  export default NoteItem;

 