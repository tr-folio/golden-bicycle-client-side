import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { product } = props;
    const id = product._id;

    return (
        <Col xs="12" md="6" lg="4" className="mb-3">
            <div className="bg-dark pb-2 rounded-3">
                <h6 className="fs-4 bg-dark m-0 text-light py-2 rounded-3">{product.productName}</h6>
                <p style={{height: '250px'}}>
                    <img src={product.img} alt="" style={{width: '100%', height: '100%'}}/>
                </p>
                <p className="px-3" style={{color: 'rgb(180, 180, 180)'}}>
                    {product.description}
                </p>
                <Link to={`/purchase/${id}`}><Button variant="dark" className="border-1 border-white">Purchase</Button></Link>
            </div>
        </Col>
    );
}

export default Product;