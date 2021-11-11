import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="d-block bg-dark py-5">
            <Container>
                <Row className="d-flex">
                    <Col xs="12" lg="4">
                        <h3 className="text-info text-start mb-3">Golden Bicycle</h3>
                        <p className="text-light" style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="text-info text-start">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                        </p>
                    </Col>
                    <Col xs="12" lg="4">
                        <h3 className="text-light mb-3">Quick Links</h3>
                        <Link style={{textDecoration: 'none'}} className="text-info" to="">Home</Link> <br/> <br/>
                        <Link style={{textDecoration: 'none'}} className="text-info" to="">Link1</Link> <br/> <br/>
                        <Link style={{textDecoration: 'none'}} className="text-info" to="">Link2</Link> <br/> <br/>
                        <Link style={{textDecoration: 'none'}} className="text-info" to="">Link3</Link> <br/> <br/>
                    </Col>
                    <Col xs="12" lg="4">
                        <h3 className="text-light text-lg-info text-lg-end mb-3">Contact Us</h3>
                        <p className="text-info text-lg-light text-lg-end">Email: abc@example.com</p>
                        <p  className="text-info text-lg-light text-lg-end">Phone: 22222222</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;