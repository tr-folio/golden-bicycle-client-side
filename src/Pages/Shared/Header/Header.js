import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
    const { user, logout } = useAuth();
    const history = useHistory();
    const userName = localStorage.getItem("userName");

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
                        {user?.email && <Button onClick={() => logout(history)} variant="primary">Logout</Button>}
                        {userName && <span className="text-light mt-2 ps-2">Hello {userName}</span>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;