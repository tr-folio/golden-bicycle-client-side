import React from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Register = () => {
    const { user, isLoading, registerUser } = useAuth();

    const registerData = {
        email: '',
        password: '',
        password2: ''
    };

    const handleInputField = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        registerData[field] = value;
    }

    const handleRegister = (event) => {
        event.preventDefault();
        if (registerData.password !== registerData.password2) {
            window.alert('Password did not matched');
            return;
        }
        registerUser(registerData.email, registerData.password);
        console.log(registerData.email, registerData.password);
    }

    return (
        <div>
            <Header></Header>
            <br/>
            <Container>
                <Row>
                    <Col xs="12" lg="6" className="mb-5">
                        <h2>Please Register</h2>
                        <hr/>
                        <form onSubmit={handleRegister}>
                            <input onBlur={handleInputField} className="w-75 px-2 fs-5" type="email" name="email" placeholder="Your Email"/> <br/> <br/>
                            <input onBlur={handleInputField} className="w-75 px-2 fs-5" type="password" name="password" placeholder="Create Password"/> <br/> <br/>
                            <input onBlur={handleInputField} className="w-75 px-2 fs-5" type="password" name="password2" placeholder="Confirm Password"/> <br/> <br/>
                            <Button type="submit" variant="primary">Submit</Button>
                        </form>
                        <p className="py-3">
                            <Link to="/login">Already Registered? Please Login</Link>
                        </p>
                        {isLoading && <Spinner animation="border" variant="primary"></Spinner>}
                        {user?.email && <p className="text-success">User Created Successfully</p>}
                    </Col>
                    <Col xs="12" lg="6">
                        <img src="https://i.ibb.co/wccXj9N/eberhard-grossgasteiger-8l-Dkm-Xn-Ko7s-unsplash.jpg" alt="" className="img-fluid" style={{borderRadius: '50%'}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;