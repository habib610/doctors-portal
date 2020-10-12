import React from 'react';
import Doctor from './../../../images/doctor.png'
const Appointment = () => {
    return (
        <section className="appointment my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Doctor} className="w-75 img-fluid doctor" alt=""/>
                    </div>
                    <div className="col-md-6 text align-self-center">
                        <h5 className="tex-uppercase brand-text">Appointment</h5>
                        <h1 className="text-white my-3">Make an appointment Today</h1>
                        <p className=" mb-5 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its </p> 
                        <button className="btn common-btn">Learn More</button>
                       </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;