import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function closeModal(){
    setIsOpen(false);
  }
const {subject, visitingHour, totalSpace} = booking;
    return (
        <div className="col-md-4 my-3">
 <div className="card" style={{width: '18rem'}}>
  <div className="card-body text-center">
    <h5 className="card-title brand-text">{subject}</h5>
    <h6 className="brand-header">{visitingHour}</h6>
    <p className="card-text">{totalSpace} Spaces Available</p>
    <button  className="btn common-btn text-uppercase" onClick={openModal}>Book Appointment</button>
    <AppointmentForm date={date} modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal}></AppointmentForm>
  </div>
</div>
        </div>
       
    );
};

export default BookingCard;