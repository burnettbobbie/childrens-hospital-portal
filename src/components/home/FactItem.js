import {React} from 'react';

//display facts from array
const FactItem =(props)=> {
  
const fact = props.fact;
  
return(

    <p>{fact.text}</p>    
           
    );
};

  export default FactItem;
