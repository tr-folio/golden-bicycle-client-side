import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Stories.css";

const Stories = () => {
  return (
    <div className="bg-dark text-white p-5">
      <Container>
        <h2 className="fw-light">Stories & Articles</h2>
        <hr/>
        <Row>
          <Col className="d-flex justify-content-center mb-3">
            <div className="story-card">
              <div className="story-card-image"></div>
              <div className="story-card-heading">
                <h4 className="text-white fw-lighter">Exploring Mountain</h4>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className="story-card">
              <div className="article py-2 px-5 rounded-pill">
                <article>
                  <h5 className="text-start">New Horizon</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quidem officia iure placeat provident cumque.</p>
                </article>
              </div>
              <br/>
              <div className="article py-2 px-5 rounded-pill">
                <article>
                  <h5 className="text-start">New Horizon</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quidem officia iure placeat provident cumque.</p>
                </article>
              </div>
              <br/>
              <div className="article py-2 px-5 rounded-pill">
                <article>
                  <h5 className="text-start">New Horizon</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quidem officia iure placeat provident cumque.</p>
                </article>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Stories;