import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageOrder from './ManageOrder/ManageOrder';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://powerful-dawn-56436.herokuapp.com/readOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    }, []);

    return (
        <div>
            <h2 className="text-start">Manage All Orders</h2>
            <br/>
            <div>
                <Table striped bordered hover>
                    <thead className="bg-dark text-light">
                        <th className="py-2">Product Name</th>
                        <th className="py-2">User Name</th>
                        <th className="py-2">User Email</th>
                        <th className="py-2">Address</th>
                        <th className="py-2">Phone</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Change Status</th>
                        <th className="py-2">Action</th>
                    </thead>
                    <tbody>
                        {
                            allOrders.map(order => <ManageOrder key={order._id} order={order}></ManageOrder>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageAllOrders;