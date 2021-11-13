import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Shared/Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <br/>
            <h2>Sorry! The page is not found.</h2>
            <Container>
                <img src="https://i.ibb.co/B6DgXf9/sorry-3160426.png" alt="" className="img-fluid"/>
            </Container>
        </div>
    );
};

export default NotFound;