import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { product } = props;

    return (
        <Col xs="12" md="6" lg="4" className="mb-3">
            <h6 className="fs-4 bg-dark m-0 text-light py-2">{product.productName}</h6>
            <p style={{height: '250px'}}>
                <img src={product.img} alt="" style={{width: '100%', height: '100%'}}/>
            </p>
            <p>
                {product.description}
            </p>
            <Link to={`/purchase/${product.id}`}><Button variant="primary" className="w-100">Purchase</Button></Link>
        </Col>
    );
}

export default Product;