import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Manage Items</Nav.Link>
      <Nav.Link href="#pricing">Add Item</Nav.Link>
      <Nav.Link href="#pricing">My items</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Log In</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
       Registration
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default Header;