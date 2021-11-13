import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const Login = () => {
    const loginData = {
        email: '',
        password: ''
    };

    const handleInputField = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        loginData[field] = value;
    }

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(loginData)
    }

    return (
        <div>
            <Header></Header>
            <br/>
            <Container>
                <Row>
                    <Col xs="12" lg="6" className="mb-5">
                        <h2>Please Login</h2>
                        <hr/>
                        <form onSubmit={handleLogin}>
                            <input onBlur={handleInputField} className="w-75 px-2 fs-5" type="email" name="email" placeholder="Your Email"/> <br/> <br/>
                            <input onBlur={handleInputField} className="w-75 px-2 fs-5" type="password" name="password" placeholder="Your Password"/> <br/> <br/>
                            <Button type="submit" variant="primary">Login</Button>
                        </form>
                        <p className="py-3">
                            <Link to="/register">New User? Please Register</Link>
                        </p>
                    </Col>
                    <Col xs="12" lg="6">
                        <img src="https://i.ibb.co/wccXj9N/eberhard-grossgasteiger-8l-Dkm-Xn-Ko7s-unsplash.jpg" alt="" className="img-fluid" style={{borderRadius: '50%'}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;