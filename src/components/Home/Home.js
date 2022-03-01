import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/users/${id}`, {
                        method: "DELETE",
                        headers: { 'content-type': 'application/json' }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("User has been deleted!", {
                                    icon: "success",
                                });
                            }
                            const newUsers = users.filter(user => user._id !== id)
                            setUsers(newUsers)
                        })

                } else {
                    swal("User info is safe!");
                }
            });
    }

    const handleUserSearch = e => {
        const id = e.target.value;
        fetch(`http://localhost:5000/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }
    return (
        <div className="d-flex justify-content-center mt-3">
            <div className="w-50 mt-3">
                <Link to="/add-user">
                    <button className="add-user text-primary fw-bold">
                        <i className="fas fa-user-plus me-2"></i>
                        Add User
                    </button>
                </Link>
                <div>
                    <h4 className='text-center mb-3'>Search User By ID</h4>
                    <form className='w-50 mx-auto'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <label htmlFor="" className='fs-4'>User Id: </label>
                            <input type="number" onChange={handleUserSearch} name="" placeholder='Search By User Id' className='form-control shadow-none w-75' id="" />
                        </div>
                        <div className='my-3 d-flex justify-content-between align-items-center'>
                            <label htmlFor="" className='fs-4'>Name: </label>
                            <input type="text" name="" value={user?.name} className='form-control shadow-none w-75' disabled id="" />
                        </div>
                        <div className='my-3 d-flex justify-content-between align-items-center'>
                            <label htmlFor="" className='fs-4'>Email: </label>
                            <input type="email" name="" value={user?.email} className='form-control shadow-none w-75' disabled id="" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <label htmlFor="" className='fs-4'>Mobile: </label>
                            <input type="number" name="" value={user?.mobile} className='form-control shadow-none w-75' disabled id="" />
                        </div>
                    </form>
                </div>

                <h2 className='text-center mt-3'>All Users</h2>
                {users.length === 0 ? <div className='text-center'><div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div></div> : <Table striped bordered hover responsive>
                    <thead className="table-primary text-center">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>User Id</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.user_id}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td className="text-center">
                                    <Link to={`/update/${user.user_id}`}>
                                        <button className="mx-1 btn btn-success shadow-none py-1"><i className="fas fa-user-edit"></i></button>
                                    </Link>
                                    <button onClick={() => handleDelete(user._id)} className="mx-1 btn btn-danger shadow-none py-1"><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>}

            </div>
        </div >
    );
};

export default Home;