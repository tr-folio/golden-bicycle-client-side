import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';

const Purchase = () => {
    const [selectedProduct, setSelectedProduct] = useState({});
    const formData = {
        id: selectedProduct.id,
        productName: selectedProduct.productName,
        userName: '',
        userEmail: '',
        address: '',
        phone: ''
    }
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:5000/readSingleProduct/${id}`)
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
        console.log(formData);
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
                            {/* <input onBlur={handleInputField} className="w-75 px-2 fs-4" type="hidden" name="id" value={selectedProduct?.id}/> <br/> <br/> */}
                            {/* <input onBlur={handleInputField} className="w-75 px-2 fs-4" type="text" name="productName" placeholder="product name"/> <br/> <br/> */}
                            <h6 className="w-75 mx-auto text-start fw-bold">Product Name:</h6>
                            <p className="w-75 bg-secondary mx-auto my-0 text-white text-start ps-2 fs-4">{formData.productName}</p> <br/>
                            <h6 className="w-75 mx-auto text-start fw-bold">Your Name:</h6>
                            <input onBlur={handleInputField} className="w-75 border border-secondary px-2 fs-4" type="text" name="userName" placeholder="Your Name"/> <br/> <br/>
                            <h6 className="w-75 mx-auto text-start fw-bold">Your Email:</h6>
                            <input onBlur={handleInputField} className="w-75 border border-secondary px-2 fs-4" type="text" name="userEmail" placeholder="Your Email"/> <br/> <br/>
                            <h6 className="w-75 mx-auto text-start fw-bold">Your Address: </h6>
                            <input onBlur={handleInputField} className="w-75 border border-secondary px-2 fs-4" type="text" name="address" placeholder="Your Address"/> <br/> <br/>
                            <h6 className="w-75 mx-auto text-start fw-bold">Phone Number: </h6>
                            <input onBlur={handleInputField} className="w-75 border border-secondary px-2 fs-4" type="text" name="phone" placeholder="Phone Number"/> <br/> <br/>
                            <Button type="submit">Place Order</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Purchase;