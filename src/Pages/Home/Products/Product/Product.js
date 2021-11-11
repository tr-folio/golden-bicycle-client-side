import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Product = (props) => {
    const { product } = props;

    return (
        <Col xs="12" md="6" lg="4" className="mb-3">
            <h6 className="fs-4 bg-dark m-0 text-light py-2">{product.productName}</h6>
            <p>
                <img src={product.img} alt="" className="img-fluid"/>
            </p>
            <p>
                {product.description}
            </p>
            <Button variant="primary" className="w-100">Purchase</Button>
        </Col>
    );
}

export default Product;