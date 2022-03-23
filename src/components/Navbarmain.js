import React, { Component } from 'react';
import {Nav,Navbar,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import Aboutus from './Aboutus';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

class Navbarmain extends Component {
    render() {
        return (
          <>

          <Router>
            <div>
                <Navbar bg="dark" variant="dark"expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Iconio Technology Private Limited</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to={"./home"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"./aboutus"}>About Us</Nav.Link>
        <NavDropdown title="Features" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Services</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Blogs</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
           Carees
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to={"./signup"}>Log In</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
                
            </div>
            <div>
            <Routes>
            <Route path="/home" element={<Home />} /> 
            <Route path="/aboutus" element={<Aboutus />} /> 
            <Route path="/signup" element={<Signup/>} /> 
          
        </Routes>
            </div>
            </Router>
            </>
        );
    }
}

export default Navbarmain;