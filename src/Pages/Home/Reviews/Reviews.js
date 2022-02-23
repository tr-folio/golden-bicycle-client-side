import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import EachReview from './ShowReview/EachReview';
import FadeLoader from "react-spinners/FadeLoader";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [reviewsPerPage, setReviewsPerPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPages = [];
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        fetch('https://powerful-dawn-56436.herokuapp.com/readreviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
            setIsFetching(false);
        });
    }, []);

    return (
        <div className="container mt-5">
            {isFetching ? 
            <div><FadeLoader color="#00AAAA" loading={true} css="" size={150} /><br/><br/><br/><br/><br/></div>
            : <div><h2 className="fw-bold mb-3">Reviews</h2>
            <hr/>
            <Container>
                <Row>
                {
                    reviews.map(review => <EachReview key={review._id} review={review}></EachReview>)
                }</Row>
            </Container></div>}
        </div>
    );
};

export default Reviews;