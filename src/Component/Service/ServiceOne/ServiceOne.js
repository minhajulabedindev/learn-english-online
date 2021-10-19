import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ServicePartTwo from '../ServicePartTwo/ServicePartTwo';
import "./ServiceOne.css"



const ServiceOne = () => {
    const [services,setServises]=useState([])
    console.log(services)
    useEffect(()=>{
        fetch("/service.json")
        .then(res=>res.json())
        .then(data=>setServises(data))
    },[])
    return (
        <div>
            <Container className="mt-5">
            <h1 className="text-start mt-5 p-4 text-dark fs-1 fw-bold">Speaking </h1>
            <div className="service-contain ">
             {
                services.map(service=><ServicePartTwo 
                    key={service.key}
                    service={service}></ServicePartTwo>)
            }   
            </div>
            </Container>
        </div>
    );
};

export default ServiceOne;