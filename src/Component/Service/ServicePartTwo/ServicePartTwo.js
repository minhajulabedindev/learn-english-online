import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';


const ServicePartTwo = (props) => {
      const {img,name,price,background,teach}=props.service
      const history= useHistory()

      const evenHandlers =()=>{
          history.push("/success")
      }
    return (
        <div>
            
            <div className="p-2 border border-secondary rounded">
                <img className="w-100 rounded" src={img} alt="" />
                <h3>{name}</h3>
                <p>{background}</p>
                <p>{teach}</p>
                 <h4>Course Price : {price}</h4>
            <Button 
            onClick={evenHandlers}
            className="mb-2" variant="outline-primary">Get Course</Button>

            </div>
            
        </div>
    );
};

export default ServicePartTwo;