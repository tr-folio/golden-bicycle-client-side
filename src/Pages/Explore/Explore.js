import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { FadeLoader } from 'react-spinners';
import Product from '../Home/Products/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        fetch('https://powerful-dawn-56436.herokuapp.com/readproducts')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            // console.log(data);
            setIsFetching(false);
        });
    }, []);

    return (
        <div>
            <Header></Header>
            <br/>
            <Container>
                {isFetching ? 
                <div><FadeLoader color="#00AAAA" loading={true} css="" size={150} /><br/><br/><br/><br/><br/></div>
                : <div><h2 className="text-start text-primary">Buy Your Favourite Bicycle Now</h2>
                <br/>
                <Row>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </Row></div>}
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Explore;