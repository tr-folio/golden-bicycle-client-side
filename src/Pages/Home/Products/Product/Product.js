import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Product = (props) => {
    const { product } = props;

    return (
        <Col xs="12" md="6" lg="4" className="mb-3">
            <h6>{product.productName}</h6>
            <p>
                <img src={product.img} alt="" className="img-fluid"/>
            </p>
            <p>
                {product.description}
            </p>
            <Button variant="primary">Purchase</Button>
        </Col>
    );
}

export default Product;