import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import ADHome from '../AdminDashboard/ADHome/ADHome';
import UDHome from '../UserDashboard/UDHome/UDHome';
import useAuth from '../../../hooks/useAuth';
import './DashboardHome.css';

const DashboardHome = () => {
    let sideBarFlag = true;
    let elementSelector = '';
    const userAdmin = localStorage.getItem('userAdmin');
    const { logout } = useAuth();
    const history = useHistory()

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
            <div className="custom-dashboard-header bg-dark py-1">
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
                        <h4>Menu</h4>
                        {!userAdmin && <h6><Link to="/dashboard/myorders" style={{color: 'white', textDecoration: 'none'}}><Button variant="light" style={{width: '100%'}}>My Orders</Button></Link></h6>}
                        {!userAdmin && <h6><Link to="/dashboard/review" style={{color: 'white', textDecoration: 'none'}}><Button variant="light" style={{width: '100%'}}>Review</Button></Link></h6>}
                        {!userAdmin && <h6><Link to="/dashboard/pay" style={{color: 'white', textDecoration: 'none'}}><Button variant="light" style={{width: '100%'}}>Pay</Button></Link></h6>}
                        {userAdmin && <h6><Link to="/dashboard/manageAllOrders" style={{color: 'white', textDecoration: 'none'}}><Button variant="light" style={{width: '100%'}}>Manage All Orders</Button></Link></h6>}
                        {userAdmin && <h6><Link to="/dashboard/addAProduct" style={{color: 'white', textDecoration: 'none'}}><Button variant="light" style={{width: '100%'}}>Add A Product</Button></Link></h6>}
                        {userAdmin && <h6><Link to="/dashboard/makeAdmin" style={{color: 'white', textDecoration: 'none'}}><Button variant="light" style={{width: '100%'}}>Make Admin</Button></Link></h6>}
                        {userAdmin && <h6><Link to="/dashboard/manageProducts" style={{color: 'white', textDecoration: 'none'}}><Button variant="light" style={{width: '100%'}}>Manage Products</Button></Link></h6>}
                        <h6><Button variant="light" style={{width: '100%'}} onClick={() => logout(history)}>Logout</Button></h6>
                    </div>
                    <div className="custom-routes p-3" id="dashboard-routes">
                        {!userAdmin && <UDHome></UDHome>}
                        {userAdmin && <ADHome></ADHome>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;