import React from 'react';

import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const HomeThree = (props) => {
    const{course_name,img,name,background,teach}=props.course 
    const history=useHistory()
    const evenHendler=()=>{
             history.push("/service")
    }
    return (
        <div className="border border-dark rounded-3 ">
            <h4>{course_name}</h4>
           <img className="w-100 border border-dark rounded" src={img} alt="" />
          
                <h6>{name}</h6>
             <p>{background}</p>
             <p>{teach}</p>
           
            
            <Button 
            onClick={evenHendler}
            className="mb-2" 
            variant="outline-info">Get Course</Button>

        </div>
    );
};

export default HomeThree;