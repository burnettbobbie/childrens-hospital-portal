import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthService from '../../services/auth.service';
import AvItem from './AvItem';

const Avatar =()=>{

    const [avatar, setAvatar] = useState([]);
    //get user info 
    const currentUser = AuthService.getCurrentUser();
    //current user id
    const id  = currentUser.id;

    //fetch user avatar by user id    
    useEffect(() => {

        const fetchAvatar = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5000/api/patients/patient/photo/${id}`);
            setAvatar(response.data);
          } catch (err) {
            console.log(`error from get avatar`);
          }
        };
    
        fetchAvatar();
      }, [id]);
    
    //map avatar object
    const AvatarList =
      avatar.length === 0
        ? 'there is no patient record!'
        : avatar.map((a, k) => <AvItem a={a} key={k} />);


  return ( 
    //display avatar
      <>      
        <div className="skin">
            <div>{AvatarList}</div>
        </div>                  
      </>
  );
       
};

export default Avatar;

