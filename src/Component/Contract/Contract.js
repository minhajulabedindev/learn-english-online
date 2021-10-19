import React from 'react';
import { Container } from 'react-bootstrap';
import "./Contract.css"

const Contract = () => {
    return (
        <div>

             <Container  >
              <div className="my-lg-5 row" >
                   <div className="col-lg-6">
                    <img className="w-100" src="https://image.freepik.com/free-vector/signing-contract-official-document-agreement-deal-commitment-businessmen-cartoon-characters-shaking-hands-legal-contract-with-signature_335657-294.jpg" alt="" />
                </div>
                  <div className="mt-lg-5 pt-lg-5  col-lg-6">
                    <h1 className='mt-lg-5 pb-lg-5 text-primary'>
                        You Can Contract With Us
                    </h1>
                    <h2>Mobile: <span>01748393545</span></h2>
                    <h3>Email: <span>arndiskde@gmail.com </span></h3>
                </div>
              </div>
               
            </Container>
        </div>
    );
};

export default Contract;