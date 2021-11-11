import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const CarbonBicycle = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img src="https://i.ibb.co/dKycf1w/robert-bye-t-G36rv-Ceqng-unsplash.jpg" alt="" className="img-fluid"/>
                </Col>
                <Col>
                    <h3 className="fw-bold mb-3">Carbon Fiber Sports Bicycle</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="py-3">Haven't subscribed yet? <Button variant="primary">Subscribe Now</Button></p>
                </Col>
            </Row>
        </Container>
    );
};

export default CarbonBicycle;