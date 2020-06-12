import React from 'react';
import * as ReactBoostrap from "react-bootstrap";
import logo from "../media/logo2.jpg";
function NavBar(){
    return(
        <ReactBoostrap.Navbar bg="light" expand="sm">
      
  <ReactBoostrap.Navbar.Brand href="/">
      <img 
          src={logo} 
          width="75px"
          height="50px"
          alt = "logo"/>
       DigiRail
  </ReactBoostrap.Navbar.Brand>
  <ReactBoostrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBoostrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBoostrap.Nav className="mr-auto">
      <ReactBoostrap.Nav.Link href="/">Home</ReactBoostrap.Nav.Link>
      <ReactBoostrap.Nav.Link href="/about">About Us</ReactBoostrap.Nav.Link>
      <ReactBoostrap.NavDropdown title="More" id="basic-nav-dropdown">
        <ReactBoostrap.NavDropdown.Item href="/login">Check Train Routes</ReactBoostrap.NavDropdown.Item>
        <ReactBoostrap.NavDropdown.Item href="/login">Check Pricing</ReactBoostrap.NavDropdown.Item>
        <ReactBoostrap.NavDropdown.Divider />
        <ReactBoostrap.NavDropdown.Item href="/contact">Contact Us</ReactBoostrap.NavDropdown.Item>
        
      </ReactBoostrap.NavDropdown>
      
    </ReactBoostrap.Nav>
  </ReactBoostrap.Navbar.Collapse>
</ReactBoostrap.Navbar>
    );
}

export default NavBar;