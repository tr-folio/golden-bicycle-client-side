import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/readproducts')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return (
        <div className="container">
            <h2 className="fw-bold mb-3">Our Products</h2>
            <Container>
                <Row>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products