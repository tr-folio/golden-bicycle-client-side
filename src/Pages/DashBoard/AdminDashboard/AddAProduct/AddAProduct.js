import React from 'react';
import { Button } from 'react-bootstrap';

const AddAProduct = () => {
    const productData = {
        productName: '',
        description: '',
        img: ''
    }

    const handleInputField = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        productData[field] = value;
    }

    const handleAddAProduct = (event) => {
        event.preventDefault();
        // console.log(productData);
        fetch('http://localhost:5000/addAProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            if (data.acknowledged) {
                window.alert('product added successfully');
                window.location.reload();
            }
        })
    }

    return (
        <div>
            <h2 className="text-start">Add A Product</h2>
            <br/>
            <form onSubmit={handleAddAProduct}>
                <h6 className="text-start fw-bold">Enter Product Name:</h6>
                <div className="text-start">
                    <input onBlur={handleInputField} type="text" name="productName" placeholder="Product Name" className="w-75 px-2 fs-5 border border-primary"/>
                </div>
                <br/>
                <h6 className="text-start fw-bold">Enter Product Image URL:</h6>
                <div className="text-start">
                    <input onBlur={handleInputField} type="text" name="img" placeholder="Product Image" className="w-75 px-2 fs-5 border border-primary"/>
                </div>
                <br/>
                <h6 className="text-start fw-bold">Add a Description:</h6>
                <div className="text-start">
                    <textarea onBlur={handleInputField} cols="50" rows="5" name="description" placeholder="Product Image" className="w-75 px-2 fs-5 border border-primary"/>
                </div>
                <br/>
                <div className="text-start">
                    <Button variant="primary" type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default AddAProduct;