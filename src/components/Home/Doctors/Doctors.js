import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getDoctor')
        .then(res=>res.json())
        .then(data=>{
            setDoctor(data)
        })
    },[])
    return (
        <section className="doctors my-5">
            <div className="container my-5">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctor.map(data=> <Doctor data={data}></Doctor>)
                    }

                </div>
                <div className="row"></div>
            </div>
        </section>
    );
};

export default Doctors;