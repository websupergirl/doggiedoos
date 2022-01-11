import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sarah from "../media/testimonial-1.3e8e31f1.jpg";
import frank from "../media/testimonial-2.7c1d260b.jpg";
import rhonda from "../media/testimonial-3.9f1788e7.jpg";
import richard from "../media/testimonial-4.dddcd95d.jpg";

export default function Testimonials() {
  return (
    <>
      <h1>Client Testimonials</h1>
      <p>
        Our team has been poop scooping throughout the Willamette Valley since
        2006. We know how fast the daily poos can get away from you. That's why
        we are here to help! Allow us to make your life a little more simple,
        your family and pets a little safer, and your yard clean.
      </p>
      <p>
        Check out these client testimonials to see what people have to say about
        our pet waste removal and other pet care services!
      </p>
      <Container>
        <Row>
          <Col>
            <img src={sarah} alt="Testimonial from Sarah" className="m-3" />
          </Col>
          <Col>
            <img src={rhonda} alt="Testimonial from Rhonda" className="m-3" />
          </Col>
        </Row>
        <Row>
          <Col>
          <img src={frank} alt="Testimonial from Frank" className="m-3" />
          </Col>
          <Col>
            <img src={richard} alt="Testimonial from Richard and Beverly" className="m-3" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
