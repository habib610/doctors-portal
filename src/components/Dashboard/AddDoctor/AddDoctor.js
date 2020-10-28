import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleImageUpload = event => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('https://sheltered-stream-26599.herokuapp.com/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert("Doctors Added Successfully")
                    event.target.reset();
                   
                }
            })
            .catch(error => {
                console.error(error)
            })

            event.preventDefault();
           
           
    }
    return (
        <section className="container-fluid">
            <div className=" row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <h1 className="brand-text">Add A Doctor</h1>
                    <form onSubmit={handleImageUpload}>                     
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} placeholder="New Doctor name" type="text" class="form-control" name="name" />
                    </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" placeholder="New Doctor email" class="form-control" name="email" />
                        </div>
                        <div class="form-group">
                            <input onChange={handleFileChange} type="file" class="form-control-file"  />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-5">

                </div>
            </div>
        </section>









        //     <div className="container-fluid  text-white">
        //         <div className="row">
        //             <div className="col-md-2 py-5">
        //                 <Sidebar></Sidebar>
        //             </div>
        //             <div className="col-md-10 bg-dark p-5 ">
        //                
        //             </div>
        //         </div>
        //     </div>
    );
};

export default AddDoctor;