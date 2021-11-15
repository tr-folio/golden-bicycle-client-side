import React from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
    let emailField = '';
    let email = '';

    const handleMakeAdmin = (event) => {
        event.preventDefault();
        emailField = document.getElementById('email');
        email = emailField.value;
        // console.log(email);
        const user = {email: email};
        fetch('http://localhost:5000/makeAnAdmin', {
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