import React from 'react';
import { Link} from 'react-router-dom';

const UserCard = (props) => {
  //user props carried from get users request
  const user = props.user;
  

  return (
    <div className='user-card'>
      {
        //show patient details from user id
      }
        <Link id="view-record" to={`/User-Records/show-patient/${user._id}`}>View Record</Link>  
        {
          //user details
        }
        <h3 className="uppercase">{user.lastname}</h3>
        <table>
          <tbody>
          <tr>
            <td>Forename(s):</td>
            <td>{user.firstname}</td>
          </tr>
          <tr>
            <td>Username: </td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Email: </td>
            <td>{user.email}</td>
          </tr>
          </tbody>
        </table>
    </div>
  );
};

export default UserCard;
