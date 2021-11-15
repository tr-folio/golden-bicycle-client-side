import React from 'react';
import { Button, Col } from 'react-bootstrap';

const SingleOrder = (props) => {
    const { order } = props;

    const cancelOrder = () => {
        const cancelOrderFlag = window.confirm('Do you want to cancel order?');
        if (cancelOrderFlag) {
            // console.log('cancel order');
        }
    }

    return (
        <Col xs="12" md="6" lg="4">
            <div className="border border-1">
                <div>
                    <img src={order.img} alt="" className="img-fluid"/>
                </div>
                <br/>
                <h5>Product Name: {order.productName}</h5>
                <h5>Your Name: {order.userName}</h5>
                <h5>Address: {order.address}</h5>
                <h5>Phone: {order.phone}</h5>
                <p>
                    <Button variant="primary" onClick={cancelOrder} style={{width: '100%'}}>Cancel Order</Button>
                </p>
            </div>
            <br/>
        </Col>
    )
}

export default SingleOrder;