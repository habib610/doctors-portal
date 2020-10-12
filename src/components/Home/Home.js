import React from 'react';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Doctors from './Doctors/Doctors';
import FeaturedServices from './FeaturedServices/FeaturedServices';
import Footer from './../Shared/Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedServices></FeaturedServices>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;