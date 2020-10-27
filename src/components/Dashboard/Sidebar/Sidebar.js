import { faCalendar, faCog, faHome, faTh, faUser, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [patient, setPatient] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/isAdmin?email=${loggedInUser.email}`)
        .then(res=> res.json())
        .then(data => setPatient(data))
    },[])
    return (
        <div style={{height: '100vh'}} className="sidebar pt-5 px-3 text-white ">
   
   {
             patient?(<div>
                <div className="my-2">
                            <NavLink to="/appointments" className="sidebar-link" activeClassName="nav-active"><FontAwesomeIcon className="mr-1" icon={faTh} /> Dashboard</NavLink>
                            </div>
                
                            <div className="my-2">
                            <NavLink to="/" className="sidebar-link"><FontAwesomeIcon className="mr-1" icon={faHome} />Home</NavLink>
                            </div>
                </div>):( <div>

       
    <div className="my-2">
    <NavLink exact to="/appointments" className="sidebar-link" activeClassName="nav-active"><FontAwesomeIcon className="mr-1" icon={faCalendar} />Appointment</NavLink>
    </div>

    <div className="my-2">
    <NavLink to="/patients" className="sidebar-link" activeClassName="nav-active"> <FontAwesomeIcon className="mr-1" icon={faUser} /> Patients</NavLink>
    </div>

    <div className="my-2">
    <NavLink to="/AddDoctor" className="sidebar-link" activeClassName="nav-active"><FontAwesomeIcon className="mr-1" icon={faUserMd} /> Admin</NavLink>
    </div>
</div>
  )
        }

        </div>
    );
};

export default Sidebar;