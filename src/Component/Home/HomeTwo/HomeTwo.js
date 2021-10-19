import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeThree from '../HomeThree/HomeThree';
import "./HomeTwo.css"

const HomeTwo = () => {
    const [courses,setaCourse]=useState([])
    console.log(courses)
    useEffect(()=>{
        fetch('/home.json')
        .then(res=>res.json())
        .then(data=>setaCourse(data))
    },[])
    
    return (
        <div className="mt-lg-5">
            <Container>
            <div className=" pt-lg-5">
                <hr />
            <h2 className=" fw-bold ">Our Courses</h2>
           

            </div>
            <div className="row mt-lg-5 pt-lg-5">
                <div className="col-lg-6 mt-lg-5">
                    <div >
                         <img className="mt-lg-2 w-100" src="https://image.freepik.com/free-vector/font-abc-happy-children_1308-5923.jpg" alt="" />
                    <img className="w-100" src="https://image.freepik.com/free-vector/doodle-foreign-language-education-course_124507-8507.jpg" alt="" />
                    </div>
                   
                </div>

                <div className="homeTwo-container col-lg-6">
                
                    {
                    courses.map(course=><HomeThree 
                        key={course.key}
                        course={course}></HomeThree>)
                    }  
                 </div> 
            </div>
           </Container>
            
        </div>
    );
};

export default HomeTwo;