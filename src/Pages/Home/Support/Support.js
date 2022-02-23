import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Support.css";

const Support = () => {
  return (
    <div>
      <Container>
        <h2 className="fw-bold mb-3">Technical Support</h2> <hr/>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="telephone-image"></div>
          </Col>
          <Col>
            <div className="contact-us">
              <h4 className="mb-3">Contact Us Now</h4>
              <form>
                <fieldset>
                  <input className="w-100 mb-3 py-1 px-3" type="text" name="name" placeholder="Please, enter your name"/>
                </fieldset>
                <fieldset>
                  <input className="w-100 mb-3 py-1 px-3" type="email" name="email" placeholder="Please, enter your email"/>
                </fieldset>
                <fieldset>
                  <textarea className="w-100 mb-3 py-1 px-3" rows="4" placeholder="Please, write your message here ..."/>
                </fieldset>
                <fieldset>
                  <button className="btn btn-dark">Submit</button>
                </fieldset>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Support;