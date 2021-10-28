import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddUser = () => {
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Successfully Added User!",
                        icon: "success",
                        button: "OK!",
                    });
                }
            })
        reset()
    };
    return (
        <div className="d-flex justify-content-center mt-3">
            <div className="w-50 mt-3">
                <div className="text-start mb-2">
                    <Link to="/" className="text-decoration-none">
                        <span><i className="fas fa-angle-double-left me-1"></i>All User</span>
                    </Link>
                </div>
                <div className="text-center">
                    <h3>Create New User</h3>
                    <p className="m-0">Use The Below Form to Create a New User</p>
                </div>
                <div className="d-flex justify-content-center">
                    <form className="mt-4 w-75" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-2">
                            <label className="mb-2">Name</label> <br />
                            <input
                                className="form-control shadow-none"
                                type="text"
                                {...register("name", { required: true, maxLength: 80 })}
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="mb-2">Email</label> <br />
                            <input
                                className="form-control shadow-none"
                                type="email"
                                {...register("email", {
                                    required: true
                                })}
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-2">Mobile</label> <br />
                            <input
                                className="form-control shadow-none"
                                type="tel"
                                {...register("mobile", {
                                    required: true,
                                    maxLength: 11,
                                    minLength: 8
                                })}
                                placeholder="Your Mobile Number"
                            />
                        </div>
                        <div className="text-center">
                            <input className="btn btn-primary shadow-none rounded-pill fw-bold py-2 px-3" type="submit" value="Add User" />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddUser;