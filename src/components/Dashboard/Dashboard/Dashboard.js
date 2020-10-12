import React, { useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';

const Dashboard = () => {
    const [appointments,setAppointments] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDate = (date) => {
        setSelectedDate(date)
    };

    useEffect(()=>{
        fetch('http://localhost:5000/appointmentsByDate',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({date:selectedDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[selectedDate])

    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <h1>Calendar</h1>
                    <Calendar
        onChange={handleDate}
        value={new Date()}
      />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;