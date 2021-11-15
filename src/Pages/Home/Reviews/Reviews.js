import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import EachReview from './ShowReview/EachReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/readreviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="fw-bold mb-3">Reviews</h2>
            <hr/>
            <Container>
                {
                    reviews.map(review => <EachReview key={review._id} review={review}></EachReview>)
                }
            </Container>
        </div>
    );
};

export default Reviews;