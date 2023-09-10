import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';


function ShowUserList() {
  //define users
  const [users, setUsers] = useState([]);
 
  //get all users
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/patients/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log('Error from show userList');
      });
  }, []);
  
  //map users objects
  const userList =
    users.length === 0
      ? 'there is no user record!'
      : users.map((user, k) => <UserCard user={user} key={k} />);


  return (
    <>
      <div className='users-page'>
        <div className="admin-panel">
          {
            //admin navigation bar
          }
          <nav className="admin-nav">
            <div className="user-nav">
              <li className="nav-item">
                <Link to={"/Admin"} className="nav-link">
                  Home
                </Link>
              </li>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Logout
                  </Link>
                </li>       
            </div>         
          </nav>
        </div>
        <div className='users-container'>
          {
            //render list of users
          }  
          <div className=''>{userList}</div>
        </div>
      </div>
    </>
  );
}

export default ShowUserList;
