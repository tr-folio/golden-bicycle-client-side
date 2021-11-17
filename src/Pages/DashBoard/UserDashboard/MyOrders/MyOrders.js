import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleOrder from './SingleOrder/SingleOrder';

const MyOrders = () => {
    const [userOrders, setUserOrders] = useState([]);
    const userEmail = localStorage.getItem("userEmail");

    useEffect(() => {
        fetch(`https://powerful-dawn-56436.herokuapp.com/readSpecificOrders/${userEmail}`)
        .then(res => res.json())
        .then(data => setUserOrders(data));
    }, []);

    return (
        <div>
            <h2>Your Orders</h2>
            <br/>
            <Container>
                <Row>
                    {
                        userOrders.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;