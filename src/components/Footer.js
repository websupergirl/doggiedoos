import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookServiceButton from "../components/BookServiceButton.js";
import SocialMedia from "../components/SocialMedia.js";
import petsitters from "../media/Pet-Sitters-Associates-LLC-Logo-3.0da7e4b9.jpg";
import apaws from "../media/aPaws-logo.70926d43.png";

export default function DdadFooter() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col>
              <img
                src={petsitters}
                alt="Pet Sitters Associates"
                className="img-fluid"
              />
            </Col>
            <Col>
              <img src={apaws} alt="aPaws.org" className="img-fluid" />
            </Col>
            <Col>
              <SocialMedia />
            </Col>
            <Col>
              <BookServiceButton />
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
