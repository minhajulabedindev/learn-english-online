import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-success p-2 bg-opacity-25 mt-4 pt-5 ">
           <Container>
               <div className="p-2 text-dark ">
                   <h2> <i className="fab fa-facebook-f"></i>  <i className="fab fa-twitter"></i> <i className="fab fa-apple"></i>  <i className="fab fa-github"></i>  <i className="fab fa-instagram-square"></i></h2>
                 <p>CopyRight © 2021 English Course</p>
               </div>
           </Container>
        </div>
    );
};

export default Footer;