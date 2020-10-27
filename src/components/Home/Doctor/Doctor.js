import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({data}) => {
    const {name, email, image} = data;
    return (
        <div className="col-md-4 text-center">
              <img className="img-fluid w-50 my-3" src={`data:image/jpeg;base64,${image.img}`} alt=""/>
            <h4>{name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;