import React from 'react';
import { Col} from 'react-bootstrap';
import "./EachReview.css";

const EachReview = (props) => {
    const { review } = props;
    let review_star_filled = [];
    let review_star_empty = [];

    let i = 0;
    while (i < parseInt(review.rating)) {
        review_star_filled.push(i);
        i = i + 1;
    }

    i = 0;
    while (i < (5 - parseInt(review.rating))) {
        review_star_empty.push(i);
        i = i + 1;
    }

    const showFullReview = () => {
        document.getElementById(`${review._id+'a'}`).style.display = "block";
        document.getElementById(`${review._id}`).style.display = "none";
    }
    const hideFullReview = () => {
        document.getElementById(`${review._id+'a'}`).style.display = "none";
        document.getElementById(`${review._id}`).style.display = "block";
    }

    return (
        <Col className="mb-3 d-flex justify-content-center">
            <div className="review-card p-3"><h5 className="text-start text-primary fw-light">Reviewed by: {review.review_by}</h5>
                <h6 className="text-start">Product: {review.review_product}</h6>
                <div className="d-flex justify-content-between">
                    <div className="text-center"><h6>Rating:&nbsp;
                    <span>
                        {review_star_filled.map(star => <i className='fas fa-star text-warning' key={star}></i>)}
                        {review_star_empty.map(star => <i className='far fa-star text-warning' key={star}></i>)}
                    </span></h6></div>
                </div>
                <p className="fs-6 text-start">
                    {review.review_text.length >= 40 ? 
                    <span>
                        <span id={review._id}>{review.review_text.slice(0, 41)} ... <button className="bg-primary border-0 text-white rounded-pill mt-1 px-3" onClick={showFullReview}>Read more</button></span>
                        <span className="full-review-text" id={review._id+'a'}>{review.review_text}<br/><button className="bg-dark border-0 text-white rounded-pill mt-1 px-3" onClick={hideFullReview}>Read less</button></span>
                    </span> 
                    : <span>{review.review_text}</span>}
                    
                </p>
            </div>
        </Col>
    )
}

export default EachReview;