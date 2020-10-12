import React, { useState } from 'react';
import Chair from './../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const AppointmentMain = ({handleDate}) => {


    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
        <div className="row">
           <div className="col-md-5 offset-1">
           <h1>Calendar</h1>
           <Calendar
        onChange={handleDate}
        value={new Date()}
      />

            </div>
            <div className="col-md-6">
                <img src={Chair} className="img-fluid w-100" alt=""/>
            </div>
           </div>
    </main>
    );
};

export default AppointmentMain;