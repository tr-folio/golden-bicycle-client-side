import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Review from './Review/Review';

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
            <Container>
                {
                    reviews.map(review => <Review key={review.review_id} review={review}></Review>)
                }
            </Container>
        </div>
    );
};

export default Reviews;