import React from 'react';

const PatientList = ({patient, srNo}) => {

    const {name, gender, tel, age, weight, service} = patient;

 
    return (
        <div className="row text-center my-2">
                    <div className="col-2"><h6>{srNo}</h6></div>
                    <div className="col-2"><h6>{name}</h6></div>
                    <div className="col-1"><h6>{gender}</h6></div>
                    <div className="col-1"><h6>{age}</h6></div>
                    <div className="col-1"><h6>{weight}</h6></div>
                    <div className="col-2"><h6>{tel}</h6></div>
                    <div className="col-3"><h6>{service}</h6></div>
        </div>
    );
};

export default PatientList;