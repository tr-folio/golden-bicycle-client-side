import React from 'react';
import { Button } from 'react-bootstrap';

const ManageOrder = (props) => {
    const { order } = props;

    const changeToShipped = () => {
        // window.alert('shipped');
        fetch('https://powerful-dawn-56436.herokuapp.com/changeStatus', {
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

    const deleteOrder = () => {
        // window.alert('delete order');
        fetch(`https://powerful-dawn-56436.herokuapp.com/deleteAnOrder/${order._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.acknowledged) {
                window.alert('order deleted successfully');
                window.location.reload();
            }
        })
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
            <td><Button variant="danger" onClick={deleteOrder}>Delete</Button></td>
        </tr>
    );
};

export default ManageOrder;