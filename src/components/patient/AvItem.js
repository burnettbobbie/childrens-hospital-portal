
import React from 'react';

const AvItem = (props) => {

    const photo = props.a;
    let avatar = photo[0];

    return(
        <div>
            {
                //if no photo, render nothing
            }
            {photo.length === 0 &&
            <div></div>   
            }
            {
                //if photo, display avatar
            }
            {photo.length > 0 &&
            <>  
            {
                //fetch patient avatar from multer upload destination
            }
             <img className="pat-av" alt='patient avatar' src={require(`../../../backend/uploads/${avatar.photo}`)}/>
            </>
            }
         </div>
        );
};

export default AvItem;
