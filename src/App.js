import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import AppointMents from './components/Dashboard/AppointMents/AppointMents';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import Patients from './components/Patients/Patients';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <PrivateRoute path="/patients">
          <Patients/>
          </PrivateRoute>
          <Route path="/login">
         <Login></Login>
          </Route>
          <Route path="/dentalServices">
          <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/addDoctor">
          <AddDoctor></AddDoctor>
          </PrivateRoute>

          <PrivateRoute path="/appointments">
          <AppointMents></AppointMents>
          </PrivateRoute>
          <Route component={NotFound}/>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
