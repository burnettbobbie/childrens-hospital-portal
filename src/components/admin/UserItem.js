import React from 'react';

const UserItem = (props) => {
  //user details carried from get user request
  const user = props.user;
  console.log(user)
  
  return (
    //display user full name on patient details page
    <div>
      <p>{user.firstname +' '+ user.lastname}</p>
    </div>
  );
};

export default UserItem;
