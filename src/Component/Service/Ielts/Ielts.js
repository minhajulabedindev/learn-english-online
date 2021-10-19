import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import IeltsTwo from '../IeltsTwo/IeltsTwo';

const Ielts = () => {
    const [services,setServises]=useState([])
    console.log(services)
    useEffect(()=>{
        fetch("/ielts.json")
        .then(res=>res.json())
        .then(data=>setServises(data))
    },[])
    return (
        <div>
            <Container>
            <h1 className="text-start mt-5 p-4 text-dark fs-1 fw-bold">IELTS</h1>
            <div className="service-contain ">
             {
                services.map(service=><IeltsTwo
                    key={service.key}
                    service={service}></IeltsTwo>)
            }   
            </div>
            </Container>
        </div>
    );
};

export default Ielts;