import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Golden Bicycle</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="d-lg-flex justify-content-lg-end">
                    <Nav>
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/explore">Explore</Nav.Link>
                        {!user?.email && <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
                        {user?.email && <Button onClick={logout} variant="primary">Logout</Button>}
                        <Nav.Link as={HashLink} to="">Link3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;