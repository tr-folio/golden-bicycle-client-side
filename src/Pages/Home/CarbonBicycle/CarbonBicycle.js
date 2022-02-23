import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const CarbonBicycle = () => {
    return (
        <div className="bg-dark text-white pt-5">
            <Container className="mt-5">
                <h2 className="fw-light mb-3">Carbon Fiber Sports Bicycle <span className="text-info fw-light">Comming Soon!</span></h2>
                <hr/>
                <Row>
                    <Col xs="12" lg="6" className="mb-3">
                        <img src="https://i.ibb.co/BCXJQ5d/clayton-cardinalli-f-Q5-Hy3iv-Px-A-unsplash.jpg" alt="" className="img-fluid"/>
                    </Col>
                    <Col xs="12" lg="6">
                        <h3 className="fw-light mb-3">Carbon Fiber Sports Bicycle</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="py-2"><span className="text-info fw-bold">Comming Soon!</span> Haven't subscribed yet? To get notified <Button variant="info">Subscribe Now</Button></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CarbonBicycle;