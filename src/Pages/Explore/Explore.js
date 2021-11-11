import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Home/Products/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/readproducts')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <Header></Header>
            <br/>
            <Container>
                <h2 className="text-start text-primary">Buy Your Favourite Bicycle Now</h2>
                <br/>
                <Row>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Explore;