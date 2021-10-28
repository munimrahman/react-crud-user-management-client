import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handleDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('User Deleted Successfully!')
                }
                const newUsers = users.filter(user => user._id !== id)
                setUsers(newUsers)
            })
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
                <Table striped bordered hover responsive>
                    <thead className="table-primary text-center">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
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
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td className="text-center">
                                    <Link to="/update-user">
                                        <button className="mx-1 btn btn-success shadow-none py-1"><i className="fas fa-user-edit"></i></button>
                                    </Link>
                                    <button onClick={() => handleDelete(user._id)} className="mx-1 btn btn-danger shadow-none py-1"><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
                <div className="mt-4 text-center">
                    <button className="btn btn-secondary shadow-none py-1 px-3 mx-2">1</button>
                    <button className="btn btn-primary shadow-none py-1 px-3 mx-2">2</button>
                    <button className="btn btn-secondary shadow-none py-1 px-3 mx-2">3</button>
                    <button className="btn btn-secondary shadow-none py-1 px-3 mx-2">4</button>
                </div>
            </div>
        </div >
    );
};

export default Home;