import React from 'react';
import { Button } from 'react-bootstrap';

const ManageOrder = (props) => {
    const { order } = props;
    
    return (
        <tr>
            <td>{order.productName}</td>
            <td>{order.userName}</td>
            <td>{order.userEmail}</td>
            <td>{order.address}</td>
            <td>{order.phone}</td>
            <td>{order.status}</td>
            <td><Button variant="primary">Shipped</Button></td>
            <td><Button variant="danger">Delete</Button></td>
        </tr>
    );
};

export default ManageOrder;