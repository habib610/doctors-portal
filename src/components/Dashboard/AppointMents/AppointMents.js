import React, { useContext, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import PatientDashboard from '../PatientDashboard/PatientDashboard';

const AppointMents = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    const[userAppointment, setUserAppointment] = useState([])

    const [appointments, setAppointments] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDate = (date) => {
        setSelectedDate(date)
    };




    useEffect(() => {
        fetch('https://sheltered-stream-26599.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])


    useEffect(()=>{
        fetch(`https://sheltered-stream-26599.herokuapp.com/isAdmin?email=${loggedInUser.email}`)
        .then(res=> res.json())
        .then(data => setAdmin(data))
    },[])


    useEffect(()=>{
        fetch(`https://sheltered-stream-26599.herokuapp.com/myAppointment?email=${loggedInUser.email}`)
        .then(res=> res.json())
        .then(data => setUserAppointment(data))
    },[])

console.log(userAppointment);
    return (
        <section className="container-fluid ">
            <div className=" row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>


                {
                    admin ? (
                        <div className="col-md-9">
                            <div className="row">
                            <div className="col-md-4 mt-5">
                         <Calendar
                             onChange={handleDate}
                             value={new Date()}
                         />
                     </div>
                            <div className="col-md-7 bg-light px-2 mt-5 pt-3">
                                <div className="row d-flex justify-content-around px-2 mb-3">
                                    <h6 className="text-primary">Appointments</h6>
                                    <h6>Date {new Date().toLocaleTimeString()} </h6>
                                </div>
                                <div className="row">
                                    <div className="col-md-4"><h5>Name</h5></div>
                                    <div className="col-md-4"><h5>Schedule</h5></div>
                                    <div className="col-md-4"><h5>Actions</h5></div>
                                </div>
                                {
                                    appointments.map(appointment => <AppointmentByDate key={appointment._id} appointment={appointment}> </AppointmentByDate>)
                                }
                            </div>
                            </div>
                        
                            </div>
                        )
                    : (<div className="col-md-9">
                        {
                          userAppointment.map(details => <PatientDashboard details={details} key={details._id}></PatientDashboard>)  

                        }
                    </div>) 
                    
                }




               





            </div>
        </section>
    );
};

export default AppointMents;