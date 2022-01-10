import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import petsitters from "../media/Pet-Sitters-Associates-LLC-Logo-3.0da7e4b9.jpg";
import apaws from "../media/aPaws-logo.70926d43.png";
import booknow from "../media/book-service-now-button-turd-3.6fee38c0.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const DdadFooter = () => {
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
              <Stack gap={3}>
                <div className="text-center">Connect with us!</div>
                <div className="text-center">
                  <a
                    href="https://www.facebook.com/DoggieDoosAndDonts/"
                    rel="noopener"
                    aria-label="Facebook"
                  >
                    <FaFacebookSquare size={70} />
                  </a>
                </div>
                <div className="text-center">
                  <a
                    href="https://www.instagram.com/doggiedoosanddonts/"
                    rel="noopener"
                    aria-label="Facebook"
                  >
                    <FaInstagramSquare size={70} />
                  </a>
                </div>
                <div className="text-center">
                  <a
                    href="https://twitter.com/doggiedoosndont"
                    rel="noopener"
                    aria-label="Facebook"
                  >
                    <FaTwitterSquare size={70} />
                  </a>
                </div>
              </Stack>
            </Col>
            <Col>
              <Link to="/book-service">
                <img
                  src={booknow}
                  alt="Book Service Now"
                  className="img-fluid"
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default DdadFooter;
