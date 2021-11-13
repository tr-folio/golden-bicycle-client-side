import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    // const {user, isLoading} = useAuth();
    const userName = localStorage.getItem("userName");
    console.log(userName);

    // if (isLoading) {
    //     console.log(isLoading);
    //     // return <Spinner animation="border" variant="primary"></Spinner>;
    // }

    return (
        <Route
            {...rest}
            render={({location}) => 
                userName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute;