import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ADHome from '../AdminDashboard/ADHome/ADHome';
import UDHome from '../UserDashboard/UDHome/UDHome';
import './DashboardHome.css';

const DashboardHome = () => {
    let sideBarFlag = true;
    let elementSelector = '';

    const sideBarToggler = () => {
        if (sideBarFlag === false) {
            sideBarFlag = true;
            elementSelector = document.getElementById('side-bar');
            elementSelector.style.display = 'block';
            elementSelector = document.getElementById('btn-side-bar-toggler');
            elementSelector.textContent = 'Hide Menu';
            elementSelector = document.getElementById('dashboard-routes');
            elementSelector.style.width = 'calc(2*50% - 250px)';
        }
        else if (sideBarFlag === true) {
            sideBarFlag = false;
            elementSelector = document.getElementById('side-bar');
            elementSelector.style.display = 'none';
            elementSelector = document.getElementById('btn-side-bar-toggler');
            elementSelector.textContent = 'Show Menu';
            elementSelector = document.getElementById('dashboard-routes');
            elementSelector.style.width = '100%';
        }
    }

    return (
        <div>
            <div className="bg-dark py-1">
                <Container className="d-flex justify-content-between">
                    <div><h3 className="text-light">Dashboard</h3></div>
                    <div>
                        <Link to="/home" style={{textDecoration: 'none'}} className="text-light me-3">Home</Link>
                        <Button variant="light" onClick={sideBarToggler} id="btn-side-bar-toggler">Hide Menu</Button>
                    </div>
                </Container>
            </div>
            <div>
                <div className="dashboard-container">
                    <div id="side-bar" className="custom-nav bg-primary text-white p-3 text-start">
                        <h4 className="ps-3">Menu</h4>
                    </div>
                    <div className="custom-routes p-3" id="dashboard-routes">
                        <UDHome></UDHome>
                        <ADHome></ADHome>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;