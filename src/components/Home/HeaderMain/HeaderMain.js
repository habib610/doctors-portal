import React from 'react';
import Chair from './../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="row">
               <div className="col-md-5 offset-1">
               <h1 style={{color: '#3A4256', fontWeight: '700'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn common-btn mt-4">GET APPOINTMENT</button>
                </div>
                <div className="col-md-6">
                    <img src={Chair} className="img-fluid w-75" alt=""/>
                </div>
               </div>
        </main>
    );
};

export default HeaderMain;