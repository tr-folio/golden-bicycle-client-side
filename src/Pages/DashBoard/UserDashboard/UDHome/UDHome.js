import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const UDHome = () => {
    return (
        <div>
            <Switch>
                <Route path="/dashboard/myorders">
                    <MyOrders></MyOrders>
                </Route>
                <Route path="/dashboard/review">
                    <Review></Review>
                </Route>
                <Route path="/dashboard/pay">
                    <Pay></Pay>
                </Route>
                <Route path="/dashboard/">
                    <MyOrders></MyOrders>
                </Route>
            </Switch>
            {/* <MyOrders></MyOrders>
            <Review></Review>
            <Pay></Pay> */}
        </div>
    );
};

export default UDHome;