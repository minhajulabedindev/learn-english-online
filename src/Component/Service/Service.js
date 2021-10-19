import React from 'react';
import Ielts from './Ielts/Ielts';
import Reading from './Reading/Reading';
import ServiceOne from './ServiceOne/ServiceOne';
import Writing from './Writing/Writing';

const Service = () => {
    return (
        <div>
            <ServiceOne></ServiceOne>
            <Ielts></Ielts>
            <Writing></Writing>
            <Reading></Reading>
        </div>
    );
};

export default Service;