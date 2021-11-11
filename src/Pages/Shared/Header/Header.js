import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Golden Bicycle</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="d-none d-lg-flex justify-content-lg-end">
                    <Nav>
                        <Nav.Link as={HashLink} to="">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="">Link1</Nav.Link>
                        <Nav.Link as={HashLink} to="">Link2</Nav.Link>
                        <Nav.Link as={HashLink} to="">Link3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;