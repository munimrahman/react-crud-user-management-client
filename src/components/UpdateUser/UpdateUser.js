import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import swal from 'sweetalert';

const UpdateUser = () => {
    const { userID } = useParams();
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useState({ name: '', email: '', mobile: '' });
    useEffect(() => {
        fetch(`http://localhost:5000/users/${userID}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/users/${userID}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal({
                        title: "Updated User Successfully!",
                        icon: "success",
                        button: "OK",
                    });
                }
            })
    };
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, email: user.email, mobile: user.mobile }
        setUser(updatedUser)
    }
    const handleEmailChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = { name: user.name, email: updatedEmail, mobile: user.mobile }
        setUser(updatedUser)
    }
    const handleMobileChange = e => {
        const updatedMobile = e.target.value;
        const updatedUser = { name: user.name, email: user.email, mobile: updatedMobile }
        setUser(updatedUser)
    }
    return (
        <div className="d-flex justify-content-center mt-3">
            <div className="w-50 mt-3">
                <div className="text-start mb-2">
                    <Link to="/" className="text-decoration-none">
                        <span><i className="fas fa-angle-double-left me-1"></i>All User</span>
                    </Link>
                </div>
                <div className="text-center">
                    <h3>Update <span className="text-primary">{user?.name}</span></h3>
                    <p className="m-0">Use The Below Form to Update a User</p>
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
                                value={user?.name}
                                onChange={handleNameChange}
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
                                value={user?.email}
                                onChange={handleEmailChange}
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
                                value={user?.mobile}
                                onChange={handleMobileChange}
                            />
                        </div>
                        <div className="text-center">
                            <input className="btn btn-primary shadow-none rounded-pill fw-bold py-2 px-3" type="submit" value="Update User" />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateUser;