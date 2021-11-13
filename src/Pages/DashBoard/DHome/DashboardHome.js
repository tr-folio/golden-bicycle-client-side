import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import ADHome from '../AdminDashboard/ADHome/ADHome';
import UDHome from '../UserDashboard/UDHome/UDHome';
import './DashboardHome.css';

const DashboardHome = () => {
    const sideBar = document.getElementById('side-bar');

    const showSideBar = () => {
        sideBar.style.display = 'block';
    }
    const hideSideBar = () => {
        sideBar.style.display = 'none';
    }

    return (
        <div>
            <Header></Header>
            <div className="mb-3 bg-dark py-1">
                <Container className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={showSideBar}>Show Sidebar</Button>
                    <Button variant="secondary" onClick={hideSideBar} className="d-lg-none">Hide Sidebar</Button>
                </Container>
            </div>
            <br/>
            <Container>
                <Row>
                    <Col xs="12" lg="3" id="side-bar" className="custom-columns">
                        Side bar
                    </Col>
                    <Col xs="12" lg="9">
                        <UDHome></UDHome>
                        <ADHome></ADHome>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashboardHome;