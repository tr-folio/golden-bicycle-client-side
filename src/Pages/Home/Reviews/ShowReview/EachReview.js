import React from 'react';
import { Row } from 'react-bootstrap';

const EachReview = (props) => {
    const { review } = props;
    let review_star_filled = [];
    let review_star_empty = [];

    let i = 0;
    while (i < review.rating) {
        review_star_filled.push(i);
        i = i + 1;
    }

    i = 0;
    while (i < (5 - review.rating)) {
        review_star_empty.push(i);
        i = i + 1;
    }

    return (
        <Row className="mb-3">
            <h3 className="text-start text-primary fw-light">Reviewed by: {review.review_by}</h3>
            <h6 className="text-start fw-bold">on Product: {review.review_product}</h6>
            <div className="d-flex justify-content-between">
                <div className="text-center">Rating: {review.rating}</div>
                <div>
                    {review_star_filled.map(star => <i className='fas fa-star text-warning' key={star}></i>)}
                    {review_star_empty.map(star => <i className='far fa-star text-warning' key={star}></i>)}
                </div>
            </div>
            <p className="fs-5" style={{textAlign: 'justify'}}>
                {review.review_text}
            </p>
        </Row>
    )
}

export default EachReview;