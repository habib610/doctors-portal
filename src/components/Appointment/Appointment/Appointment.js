import React from 'react';
import { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentMain from '../AppointmentMain/AppointmentMain';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDate = (date) => {
        setSelectedDate(date)
    };
    return (
        <div>
            <NavBar></NavBar>
            <AppointmentMain handleDate={handleDate}></AppointmentMain>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
}

export default Appointment;