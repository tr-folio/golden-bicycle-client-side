import React from 'react';
import AddAProduct from '../AddAProduct/AddAProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const ADHome = () => {
    return (
        <div>
            <h2>This is admin dashboard</h2>
            <ManageAllOrders></ManageAllOrders>
            <AddAProduct></AddAProduct>
            <MakeAdmin></MakeAdmin>
            <ManageProducts></ManageProducts>
        </div>
    );
};

export default ADHome;