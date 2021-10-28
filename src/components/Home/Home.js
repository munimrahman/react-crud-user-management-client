import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="d-flex justify-content-center mt-3">
            <div className="w-50 mt-3">
                <Link to="/add-user">
                    <button className="add-user text-primary fw-bold">
                        <i class="fas fa-user-plus me-2"></i>
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
                        <tr>
                            <td>1</td>
                            <td>Munim Rahman</td>
                            <td>munimrh@gmail.com</td>
                            <td>01929645146</td>
                            <td className="text-center">
                                <Link to="/update-user">
                                    <button className="mx-1 btn btn-success shadow-none py-1"><i class="fas fa-user-edit"></i></button>
                                </Link>
                                <button className="mx-1 btn btn-danger shadow-none py-1"><i class="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td className="text-center">
                                <Link to="/update-user">
                                    <button className="mx-1 btn btn-success shadow-none py-1"><i class="fas fa-user-edit"></i></button>
                                </Link>
                                <button className="mx-1 btn btn-danger shadow-none py-1"><i class="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td className="text-center">
                                <Link to="/update-user">
                                    <button className="mx-1 btn btn-success shadow-none py-1"><i class="fas fa-user-edit"></i></button>
                                </Link>
                                <button className="mx-1 btn btn-danger shadow-none py-1"><i class="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td className="text-center">
                                <Link to="/update-user">
                                    <button className="mx-1 btn btn-success shadow-none py-1"><i class="fas fa-user-edit"></i></button>
                                </Link>
                                <button className="mx-1 btn btn-danger shadow-none py-1"><i class="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td className="text-center">
                                <Link to="/update-user">
                                    <button className="mx-1 btn btn-success shadow-none py-1"><i class="fas fa-user-edit"></i></button>
                                </Link>
                                <button className="mx-1 btn btn-danger shadow-none py-1"><i class="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
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