import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link mr-5" to="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5" to="#">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5" to="#">Dental Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5 text-white" to="#">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5 text-white" to="#">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5 text-white" to="#">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;