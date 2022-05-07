import { Button } from 'bootstrap';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Service.fig';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/home'>React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/home' >Home</Nav.Link>
      <Nav.Link as={Link} to='/mangeItem'>Manage Items</Nav.Link>
      <Nav.Link as={Link} to='/addItem'>Add Item</Nav.Link>
      <Nav.Link as={Link} to='/myItem'>My items</Nav.Link>
      
    </Nav>
    <Nav>
      {user?<p><button onClick={logout} type="button" className="btn btn-warning">log Out</button></p>:<Nav.Link as={Link} to='/logIn'>Log In</Nav.Link>}
      <Nav.Link eventKey={2} as={Link} to='/registration'>
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