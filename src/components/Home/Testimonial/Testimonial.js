import React from 'react';
import Quote from './../../../images/quote.png'

import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import TestimonialCards from '../TestimonialCards/TestimonialCards';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]
const Testimonial = () => {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-md-12  d-flex justify-content-between">
                   <div className="align-self-center">
                   <h5 className="text-uppercase brand-text">Testimonial</h5>
                    <h1 className="brand-header">What’s Our Patients Says</h1>
                   </div>
                   <img src={Quote} className="img-fluid" style={{height: '200px'}} alt=""/>
                </div>
            </div>
   <div className="card-deck mt-5 my-5">
       {
           testimonialData.map(card => <TestimonialCards testimonial={card}></TestimonialCards>)
       }
   </div>
        </section>
    );
};

export default Testimonial;