import React from 'react';
import { useContext } from 'react';
import {
    BrowserRouter as 
    Route,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import { UserContext } from '../../../App';
const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;