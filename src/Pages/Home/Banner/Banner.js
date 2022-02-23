import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner mb-3">
            <div style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <div>
                <div style={{height: '100px'}}></div>
                <Container>
                    <Row>
                        <Col className="col-12 col-md-6">
                            <div>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100" style={{borderRadius: '50%'}}
                                        src="https://images.unsplash.com/photo-1603802518992-2f1977d5c340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100" style={{borderRadius: '50%'}}
                                        src="https://images.unsplash.com/photo-1604355288256-46e6bca6a70f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                        alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100" style={{borderRadius: '50%'}}
                                        src="https://images.unsplash.com/photo-1528460452708-058136e06fdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI3fHxiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                        <Col className="d-none d-md-block col-md-6">
                            <div>
                                <div style={{height: '75px'}}></div>
                                <h1 className="bg-dark text-white m-auto text-center w-75 fw-light rounded-3 py-3">Easy Ride</h1>
                                <p className="p-3 rounded-3 w-75 m-auto fw-light fs-5" style={{backgroundColor: 'rgba(0, 0, 0, 0.75)', color: 'rgb(180, 180, 180)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            <div className="banner-caption bg-dark text-white py-3">Smooth riding, perfect hiking, enjoy biking</div></div>
        </div>
    );
};

export default Banner;