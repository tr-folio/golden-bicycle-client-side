import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://powerful-dawn-56436.herokuapp.com/readLimittedProducts/6')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    
    return (
        <div className="container">
            <h2 className="fw-bold mb-3">Our Products</h2>
            <hr/>
            <Container>
                <Row>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products