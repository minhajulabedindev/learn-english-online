import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img from '../pic-1.jpg';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./HomeOne.css"

const HomeOne = () => {
    const history=useHistory()
    const evenHendler=()=>{
             history.push("/service")
    }
    return (
        <div className="home-container">
           <Container>

                <Row>
                    <Col lg={7} className="mt-lg-5 fs-1">
                    <div className="mt-lg-5 pt-lg-5">
                       <h1 className="fw-bold home-containe">Welcome English Course</h1>
                       <h6>Luck is great, but most of life is hard work. Sometimes the only way out of stress is through it; face struggle to overcome challenges in life.But,  it’s important that we’re always moving forward. This is a lesson that I learned early in life.</h6>
                       <Button 
                       onClick={evenHendler}
                       className="mt-3 fw-bold fs-5 rounded-pill px-5" variant="primary">Course</Button>
                    </div>
                   
                    
                    </Col>
                    <Col lg={5}>
                        <div className="mt-lg-5 ">
                             <Image className="w-100"  src={img} />

                        </div>
                             
                    </Col>
                </Row>
               
           </Container>
       </div>
    );
};

export default HomeOne;