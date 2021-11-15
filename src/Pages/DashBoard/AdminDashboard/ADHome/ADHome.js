import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddAProduct from '../AddAProduct/AddAProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const ADHome = () => {
    return (
        <div>
            <Switch>
                <Route path="/dashboard/manageAllOrders">
                    <ManageAllOrders></ManageAllOrders>
                </Route>
                <Route path="/dashboard/addAProduct">
                    <AddAProduct></AddAProduct>
                </Route>
                <Route path="/dashboard/makeAdmin">
                    <MakeAdmin></MakeAdmin>
                </Route>
                <Route path="/dashboard/manageProducts">
                    <ManageProducts></ManageProducts>
                </Route>
                <Route path="/dashboard/">
                    <ManageAllOrders></ManageAllOrders>
                </Route>
            </Switch>
        </div>
    );
};

export default ADHome;