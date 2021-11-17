import React from 'react';
import { Button } from 'react-bootstrap';

const ManageOrder = (props) => {
    const { order } = props;

    const changeToShipped = () => {
        // window.alert('shipped');
        fetch('http://localhost:5000/changeStatus', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({id: order._id})
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.acknowledged) {
                window.alert('status changed successfully');
                window.location.reload();
            }
        })
    }

    const deleteProduct = () => {
        window.alert('delete product');
    }
    
    return (
        <tr>
            <td>{order.productName}</td>
            <td>{order.userName}</td>
            <td>{order.userEmail}</td>
            <td>{order.address}</td>
            <td>{order.phone}</td>
            <td>{order.status}</td>
            <td><Button variant="primary" onClick={changeToShipped}>Shipped</Button></td>
            <td><Button variant="danger" onClick={deleteProduct}>Delete</Button></td>
        </tr>
    );
};

export default ManageOrder;