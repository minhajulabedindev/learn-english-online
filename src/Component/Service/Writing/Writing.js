import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import WritingOne from '../WritingOne/WritingOne';

const Writing = () => {
  const [services,setServises]=useState([])
    console.log(services)
    useEffect(()=>{
        fetch("/writing.json")
        .then(res=>res.json())
        .then(data=>setServises(data))
    },[])
    return (
        <div>
            <Container className="mt-5">
            <h1 className="text-start mt-5 p-4 text-dark fs-1 fw-bold">Writing</h1>
            <div className="service-contain ">
             {
                services.map(service=><WritingOne
                    key={service.key}
                    service={service}></WritingOne>)
            }   
            </div>
            </Container>
        </div>
    );
};
export default Writing;