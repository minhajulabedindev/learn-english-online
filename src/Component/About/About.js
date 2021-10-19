import React from 'react';
import { Container } from 'react-bootstrap';
import img  from "./1 (1).jpg"
import "./About.css"
const About = () => {
    return (
        <div>
            <Container>
                 <div className="row">
                    <div className="col-lg-6 mt-lg-5  ">
                        <h1 className="fw-bold mt-lg-5 text ">Atiqur Rhaman</h1>
                        <p className=""> I live in Rajshahi.I studying my BSC at National University. My father name is Saiyed Ali and my mother name is Minara Begum. I have a one sister and one brother.I love and respect my teachers. I owe everything to them because they not only teach us books but teach us to respect elders, to speak truth and to live happy and make others happy. Their loving and caring nature and their motherly love makes me spell bound to praise and respect them excessively.</p>
                    </div>
                     <div className="col-lg-6">
                        <img className="w-75" src={img} alt="" />
                    </div>
               </div>

                 <div className="row">
                    <div className="col-lg-6 mt-lg-5  ">
                        <img src="https://image.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg" alt="" />
                    </div>
                     <div className="col-lg-6 mt-lg-5">
                       <h1>Details</h1>
                       <p>Although most people consider piranhas to be quite dangerous, they are, except in two main situations, entirely harmless. Piranhas rarely feed on large animals; they eat smaller fish and aquatic plants. When confronted with humans, piranhas’ instinct is to flee, not attack. But there are two situations in which a piranha bite is likely. The first is when a frightened piranha is lifted out of the water—for example, if it has been caught in a fishing net. The second is when the water level in pools where piranhas are living falls too low. A large number of fish may be trapped in a single pool, and if they are hungry, they may attack anything that enters the water.</p>
                    </div>
               </div>
            </Container>
         
        </div>
    );
};

export default About;