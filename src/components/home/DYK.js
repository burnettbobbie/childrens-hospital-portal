import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FactItem from './FactItem';

function ShowFacts() {

  const [facts, setFacts] = useState([]);

  //get random fact from database
  useEffect(() => {

    const fetchFacts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/patients/facts`
        );
        setFacts(response.data);
      } catch (err) {
        console.log(`error from show notices`);
      }
    };

    fetchFacts();
  }, []);

//map facts 
  const FactList =
    facts.length === 0
      ? 'there are no notices!'
      : facts.map((fact, k) => <FactItem fact={fact} key={k} />);

  return (
    //display facts
    <>
      <div>{FactList}</div>  
    </>
  );
}

export default ShowFacts;