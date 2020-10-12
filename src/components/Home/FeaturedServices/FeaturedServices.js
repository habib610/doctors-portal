import React from 'react';
import Featured from './../../../images/featured.png'
const FeaturedServices = () => {
    return (
        <section className="container my-5 py-5">
            <div className="row my-5 py-5">
                <div className="col-md-5">
                    <img src={Featured} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 p-2 align-self-center">
                    <h1 className="pt-5">Exceptional Dental Care, on Your Terms</h1>
                    <p className="my-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its  layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page </p>
                    <button className="btn common-btn">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;