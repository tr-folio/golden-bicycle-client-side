import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product/Product';
import FadeLoader from "react-spinners/FadeLoader";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        fetch('https://powerful-dawn-56436.herokuapp.com/readLimittedProducts/6')
        .then(res => res.json())
        .then(data => {
            setIsFetching(false);
            setProducts(data);
        });
    }, []);
    
    return (
        <div className="container">
            {isFetching ? 
            <div><FadeLoader color="#00AAAA" loading={true} css="" size={150} /><br/><br/><br/><br/><br/></div>
            : <div><h2 className="fw-bold mb-3">Our Products</h2>
            <hr/>
            <Container>
                <Row>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
            </Container></div>}
        </div>
    );
};

export default Products