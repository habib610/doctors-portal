import React from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    return (
        <section className="doctors my-5">
            <div className="container my-5">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                </div>
                <div className="row"></div>
            </div>
        </section>
    );
};

export default Doctors;