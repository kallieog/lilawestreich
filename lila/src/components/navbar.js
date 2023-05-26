import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#home">Lila Westreich</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end me-2">
            <Nav.Link href="/">Neon</Nav.Link>
            <Nav.Link href="/flameworking">Flameworking</Nav.Link>
            <Nav.Link href="/coldworking">Coldworking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}