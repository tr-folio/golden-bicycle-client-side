import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Technology.css";

const Technology = () => {
  return (
    <div className="bg-dark p-5 text-white">
      <h2 className="fw-light mb-5 text-info">New Technology</h2>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <div>
              <div className="technology-title border-success text-info fs-5 fw-lighter">SHIFTER</div> <br/>
              <button className="view-technology btn btn-success">View Details</button>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div>
              <div className="technology-title border-success text-info fs-5 fw-lighter">BRAKE</div> <br/>
              <button className="view-technology btn btn-success">View Details</button>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div>
              <div className="technology-title border-success text-info fs-5 fw-lighter">CHARGER</div> <br/>
              <button className="view-technology btn btn-success">View Details</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Technology;