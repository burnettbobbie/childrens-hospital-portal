import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoticeItem from './NoticeItem'

function ShowNotices() {

//define notices
const [notices, setNotices] = useState([]);

  useEffect(() => {
//get all notices
    const fetchNotices = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/patients/notices`
        );
        setNotices(response.data);
      } catch (err) {
        console.log(`error from show notices`);
      }
    };

    fetchNotices();
  }, []);

//map notice objects 
  const NoticeList =
    notices.length === 0
      ? 'there are no notices!'
      : notices.map((notice, k) => <NoticeItem notice={notice} key={k} />);

  return (
    <>
    {
      //render mapped notice objects
    }
      <div>{NoticeList}</div>  
    </>
  );
}

export default ShowNotices;