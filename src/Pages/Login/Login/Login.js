import React from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Login = () => {
    const { user, isLoading, loginUser, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

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
        loginUser(loginData.email, loginData.password, location, history);
        // console.log(loginData);
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
                        {isLoading && <Spinner animation="border" variant="primary"></Spinner>}
                        {user?.email && <p className="text-success">Successfully Logged In</p>}
                        <p>---------------or---------------</p>
                        <p>
                            <Button variant="primary" onClick={() => signInWithGoogle(location, history)}>Google Sign In</Button>
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