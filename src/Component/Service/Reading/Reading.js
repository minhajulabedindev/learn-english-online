import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReadingOne from '../ReadingOne/ReadingOne';

const Reading = () => {
   const [services,setServises]=useState([])
    console.log(services)
    useEffect(()=>{
        fetch("/reading.json")
        .then(res=>res.json())
        .then(data=>setServises(data))
    },[])
    return (
        <div>
            <Container className="mt-5">
            <h1 className="text-start mt-5 p-4 text-dark fs-1 fw-bold">Reading</h1>
            <div className="service-contain ">
             {
                services.map(service=><ReadingOne
                    key={service.key}
                    service={service}></ReadingOne>)
            }   
            </div>
            </Container>
        </div>
    );
};

export default Reading;