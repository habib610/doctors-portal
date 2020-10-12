import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]
const Services = () => {
    return (
        <section className="services-container my-5">
            
            <div className="text-center">
            <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 pt-5">
            {
                serviceData.map(service => <ServicesDetails service={service} key={service.name}></ServicesDetails>)
            }
        </div>
    </div>
         
     
    </section>
    );
};

export default Services;