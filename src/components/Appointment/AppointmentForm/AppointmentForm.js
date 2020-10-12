import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert("Appointment sent successfully")
            }
        })
    };

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="brand-text text-center">{appointmentOn}</h2>
    <p className="text-center brand-header">    <small> ON {date.toDateString()}</small></p>

                <form onSubmit={handleSubmit(onSubmit)} className="p-4" style={{ width: "40vw" }}>


                    < div className="form-group my-0">
                        <input type="name" name="name" ref={register({ required: true })} className="form-control" placeholder="Name" /> <br />
                        {errors.name && <span className="text-danger">Name is required</span>}
                    </div>
                    < div className="form-group my-0">
                        <input type="email" name="email" ref={register({ required: true })} className="form-control" placeholder="Email" /> <br />
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </div>
                    < div className="form-group my-0">
                        <input type="tel" name="tel" ref={register({ required: true })} className="form-control" placeholder="Phone" /> <br />
                        {errors.tel && <span className="text-danger">Phone is required</span>}
                    </div>

                    <div className="form-group my-0 row">
                        <div className="col-4">
                        <select name="gender" placeholder="Select Gender"  ref={register()} className="form-control">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                         </select>
                        </div>

                        <div className="col-4">
                        <input  name="age" ref={register({ required: true })} className="form-control" placeholder="Age" /> <br />
                        {errors.age && <span className="text-danger">Age is required</span>}
                        </div>

                        <div className="col-4">
                        <input  name="weight" ref={register({ required: true })} className="form-control" placeholder="weight" /> <br />
                        {errors.tel && <span className="text-danger">Weight is required</span>}
                        </div>
 
  </div>



                    {/* <input name="example" defaultValue="test" ref={register} />

                    <div className="row">
                        <div className="col-md">
                            <input name="exampleRequired" ref={register({ required: true })} /> <br />
                            {errors.exampleRequired && <span className="text-danger">This field is required</span>}
                        </div>
                    </div> */}


                    <input type="submit" className="btn common-btn" />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;