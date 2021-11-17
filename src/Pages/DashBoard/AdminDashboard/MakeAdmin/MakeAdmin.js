import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
    let validUser = false;
    let emailField = '';
    let email = '';

    
    const handleMakeAdmin = (event) => {
        event.preventDefault();
        emailField = document.getElementById('email');
        email = emailField.value;
        // console.log(email);
        fetch(`https://powerful-dawn-56436.herokuapp.com/checkValidUser/${email}`)
        .then(res => res.json())
        .then(data => {
            validUser = data.isValidUser;
            console.log(validUser);
        })
        .then(() => {
            if (validUser) {
                // window.alert('valid user');
                const user = {email: email};
                fetch('https://powerful-dawn-56436.herokuapp.com/makeAnAdmin', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.acknowledged) {
                        window.alert('Made admin successful');
                    }
                })
            }
            else {
                window.alert('invalid user');
            }
        })
    }
    return (
        <div>
            <h2 className="text-start">Make An Admin</h2>
            <br/>
            <form onSubmit={handleMakeAdmin}>
                <div className="text-start"><input type="email" id="email" placeholder="Enter Email" className="w-75 px-2 fs-5"/></div>
                <br/>
                <div className="text-start">
                    <Button onClick={handleMakeAdmin} variant="primary" type="button">Make Admin</Button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;