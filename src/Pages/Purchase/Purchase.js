import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const Purchase = () => {
    const [selectedProduct, setSelectedProduct] = useState({});
    const history = useHistory();
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");

    const formData = {
        productName: selectedProduct.productName,
        img: selectedProduct.img,
        userName: userName,
        userEmail: userEmail,
        address: '',
        phone: '',
        status: 'pending'
    };
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://powerful-dawn-56436.herokuapp.com/readSingleProduct/${id}`)
        .then(res => res.json())
        .then(data => setSelectedProduct(data[0]));
    }, [id]);

    const handleInputField = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        formData[field] = value;
        // console.log(formData);
    }

    const handlePurchaseForm = (event) => {
        event.preventDefault();
        // console.log(formData);
        const placeOrderFlag = window.confirm('Do you want to place order?');
        if (placeOrderFlag) {
            // console.log('yes');
            fetch('https://powerful-dawn-56436.herokuapp.com/placeorders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    window.alert('Successfully placed order.');
                    history.replace('/');
                }
            })
        }
        // else {
        //     console.log('no');
        // }
    }

    return (
        <div>
            <Header></Header>
            <br/>
            <Container>
                <Row>
                    <Col xs="12" lg="6">
                        <h2 className="fw-light text-primary">Product Detail</h2>
                        <hr/>
                        <div>
                            <div>
                                <img src={selectedProduct.img} alt="" className="img-fluid"/>
                            </div>
                            <br/>
                            <h4 className="text-start">Product Name: {selectedProduct.productName}</h4>
                            <div>
                                <h4 className="text-start">Product Description: </h4>
                                <p style={{textAlign: 'justify'}}>{selectedProduct.description}</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" lg="6">
                        <h2 className="fw-light text-primary">Confirm Purchase</h2>
                        <hr/>
                        <form onSubmit={handlePurchaseForm}>
                            <h6 className="w-75 mx-auto text-start fw-bold">Product Name:</h6>
                            <p className="w-75 bg-secondary mx-auto my-0 text-white text-start ps-2 fs-4">{formData.productName}</p> <br/>
                            <h6 className="w-75 mx-auto text-start fw-bold">Your Name:</h6>
                            <input onBlur={handleInputField} className="w-75 border border-secondary px-2 fs-4" type="text" name="userName" placeholder={formData.userName}/> <br/> <br/>
                            <h6 className="w-75 mx-auto text-start fw-bold">Your Email:</h6>
                            <input onBlur={handleInputField} className="w-75 border border-secondary px-2 fs-4" type="email" name="userEmail" placeholder={formData.userEmail}/> <br/> <br/>
                            <h6 className="w-75 mx-auto text-start fw-bold">Your Address: </h6>
                            <input onBlur={handleInputField} className="w-75 border border-secondary px-2 fs-4" type="text" name="address" placeholder="Your Address"/> <br/> <br/>
                            <h6 className="w-75 mx-auto text-start fw-bold">Phone Number: </h6>
                            <input onBlur={handleInputField} className="w-75 border border-secondary px-2 fs-4" type="text" name="phone" placeholder="Phone Number"/> <br/> <br/>
                            <Button type="submit">Place Order</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
            <br/>
        </div>
    );
};

export default Purchase;