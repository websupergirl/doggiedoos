import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function DdadMenu() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Doggie Doos and Don'ts</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Why Scoop?" id="collasible-nav-dropdown">
                <NavDropdown.Item href="scoop-for-environment">
                  For the Environment
                </NavDropdown.Item>
                <NavDropdown.Item href="scoop-for-health">
                  For Health
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Services & Rates"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="pet-waste-removal">
                  Pet Waste Removal
                </NavDropdown.Item>
                <NavDropdown.Item href="litter-cleanup">
                  Kitty Litter Clean-Up
                </NavDropdown.Item>
                <NavDropdown.Item href="dog-walking">
                  Dog Walking
                </NavDropdown.Item>
                <NavDropdown.Item href="pet-care">
                  Nail Trims & Pet Care
                </NavDropdown.Item>
                <NavDropdown.Item href="cat-sitting">
                  Cat Sitting
                </NavDropdown.Item>
                <NavDropdown.Item href="dog-sitting">
                  Dog Sitting
                </NavDropdown.Item>
                <NavDropdown.Item href="bathing-grooming">
                  Bathing & Grooming
                </NavDropdown.Item>
                <NavDropdown.Item href="obedience">
                  Private Obedience Classes
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item href="the-team">The Team</NavDropdown.Item>
                <NavDropdown.Item href="faq">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="media">Media</NavDropdown.Item>
                <NavDropdown.Item href="testimonials">
                  Testimonials
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="book-service">Book Service</Nav.Link>
              <Nav.Link href="specials">Specials</Nav.Link>
              <Nav.Link href="contact-us">Contact</Nav.Link>
              <Nav.Link href="pay-bill">Pay Bill</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
