import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import PatientList from '../PatientList/PatientList';

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allPatients')
        .then(res=>res.json())
        .then(data=>setPatients(data))
    },[])


    return (
        <section className="container-fluid ">
        <div className=" row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-9 bg-light px-2  pt-3">
                <h6 className="text-dark">Patients</h6>
                <div className="col-12 mt-4">
                    <h4 className="text-primary">All Patients</h4>
                <div className="row bg-info text-center">
                    <div className="col-2"><h5>Sr. No</h5></div>
                    <div className="col-2"><h5>Name</h5></div>
                    <div className="col-1"><h5>Gender</h5></div>
                    <div className="col-1"><h5>Age</h5></div>
                    <div className="col-1"><h5>Weight</h5></div>
                    <div className="col-2"><h5>Contact</h5></div>
                    <div className="col-3"><h5>Service</h5></div>
                </div>

                    {
                        patients.map((patient,index)=><PatientList patient={patient} srNo={index+1} key={patient._id}></PatientList>)
                    }
           
                </div>
             
            </div>
            
        </div>
       
    </section>
    );
};

export default Patients;