import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Review = () => {
    const [productNames, setProductNames] = useState([]);
    const userName = localStorage.getItem("userName");

    const handleReviewSubmit = (event) => {
        event.preventDefault();
        window.alert('ok');
    }

    useEffect(() => {
        fetch('http://localhost:5000/readProductNames')
        .then(res => res.json())
        .then(data => setProductNames(data));
    }, []);

    return (
        <div>
            <h2 className="text-start">Please Add a Review</h2>
            <br/>
            <form onSubmit={handleReviewSubmit}>
                <h6 className="fw-bold text-start">Your Name:</h6>
                <p className="p-2 text-start w-75 bg-secondary text-light">{userName}</p>
                <h6 className="fw-bold text-start">Select Product:</h6>
                <div className="text-start">
                    <select name="review_product">
                        {
                            productNames.map(product => <option>{product}</option>)
                        }
                    </select>
                </div>
                <br/>
                <h6 className="fw-bold text-start">Select Rating:</h6>
                <div className="text-start">
                    <input type="radio" name="rating" value="1"/>&nbsp;1 star <br/>
                    <input type="radio" name="rating" value="2"/>&nbsp;2 star <br/>
                    <input type="radio" name="rating" value="3"/>&nbsp;3 star <br/>
                    <input type="radio" name="rating" value="4"/>&nbsp;4 star <br/>
                    <input type="radio" name="rating" value="5"/>&nbsp;5 star <br/>
                </div>
                <br/>
                <h6 className="fw-bold text-start">Please, write a comment:</h6>
                <div  className="text-start">
                    <textarea cols="60" rows="5" name="review_text"/>
                </div>
                <br/>
                <div className="text-start">
                    <Button variant="primary" type="submit">Submit</Button>
                </div>
            </form>
            <br/>
        </div>
    );
};

export default Review;