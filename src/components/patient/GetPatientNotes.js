import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthService from '../../services/auth.service';
import Notes from './Notes';


function GetNotes() {
    
  const [notes, setNotes] = useState([]);

    //get current user
    const currentUser = AuthService.getCurrentUser();
    //current user id
    const id  = currentUser.id;
  
    //get patient notes by user id
    useEffect(() => {

      const fetchNotes = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/patients/patient/note/${id}`
          );
          setNotes(response.data);
        } catch (err) {
          console.log(`error from showPatientDetails`);
        }
      };
  
      fetchNotes();
    }, [id]);
    
    //map patient notes
    const NotesList =
    notes.length === 0
      ? 'there is no patient record!'
      : notes.map((note, k) => <Notes note={note} key={k} />);
   

  return (
    //render notes
    <div>{NotesList}</div>
  );
}

export default GetNotes;
