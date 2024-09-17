import React from "react";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="fixed-top">
      <div className="Mynavbarstyle container-fluid d-flex m-0">
        <Navbar.Brand className="ms-3" href="#home0">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="container-fluid justify-content-end">
            <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Services</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
  