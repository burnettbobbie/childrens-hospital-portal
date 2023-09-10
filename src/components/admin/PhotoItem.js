import {React} from 'react';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';


const PhotoItem =(props)=> {

//photo id
  const { id } = useParams();
//photo props from get photos request
    const photos = props.photo;
  //patient photo = first photo index in array
    let photo = photos[0];

//delete photo by photo id
    const onDeleteClick = (id) => {

      axios
        .delete(`http://localhost:5000/api/patients/photo/${id}`)
        .then((res) => {
    
        })
        .catch((err) => {
          console.log('Error form PhotoItem_deleteClick');
        })
//refresh page
        window.location.reload(true);

    };
 
    return(
      <div>
        {
          //if no photo exists --> message and link to add new photo
        }
        {photos.length === 0 &&
        <>      
        <p className='no-patient'>There is no patient photo</p>
        <Link to={`/User-Records/upload-photo/${id}`}
            className='btn admin-btn'> + Add New Photo
        </Link>     
        </>}
        {
          //if photo exists, display photo with delete button
        }
        {photos.length > 0 &&
        <>
        <div className='photo-container'>
          <img  id="patient-photo" alt='' src={require(`../../../backend/uploads/${photo.photo}`)}/>
          <button type='button' className='crud-options' onClick={() => {onDeleteClick(photo._id);}}>DELETE
          </button>
        </div>
        </>}
      </div>
    );
            
  };

  export default PhotoItem;

 