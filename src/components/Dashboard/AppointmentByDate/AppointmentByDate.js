import React from 'react';
import './AppointMentByDate.css'
const AppointmentByDate = ({appointment}) => {
    console.log(appointment)
    const {name,  created } = appointment;

    return (
        <div className="appointmentByDate row my-2 ">
                        <div className="col-md-4"><h6>{name}</h6></div>
    <div className="col-md-4"><h6>{new Date(created).toLocaleTimeString()}</h6></div>
                        <div className="col-md-4">
                            <select name="" id="">
                            <option value="">Not Visited</option>
                            <option value="">Visited</option>
                            </select></div>
                    </div>
    );
};

export default AppointmentByDate;