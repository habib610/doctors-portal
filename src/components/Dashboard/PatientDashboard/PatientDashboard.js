import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';


const PatientDashboard = ({details}) => {
    const [patientAppointment, setPatientAppointment] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {service, date} = details;

    return (
        <div className="row">
      <div className="col-md-5 m-3 p-4 bg-primary text-white">
    <h1 > {service}</h1>
    <h5> {new Date(date).toDateString()}</h5>
      </div>
        </div>
    );
};

export default PatientDashboard;