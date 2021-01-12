import React from 'react';
import * as ReactBoostrap from "react-bootstrap";
import logo from "../media/logo2.jpg";
import {Redirect} from "react-router-dom"

class NavBar2 extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        loggedIn:true
      }
    }
    handlechange(){
      this.setState({
        loggedIn:false
      })
      
    }
    render() {
      if(this.state.loggedIn === false){
        return(<Redirect to={{pathname: "/login", state: {loginnn: this.state.loggedIn}}}/>)
      }
        return(
            <div className="account">
                <ReactBoostrap.Navbar bg="light" expand="sm">
      
      <ReactBoostrap.Navbar.Brand href="/dashboard">
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
          <ReactBoostrap.Nav.Link href="/dashboard">Home</ReactBoostrap.Nav.Link>
          <ReactBoostrap.Nav.Link href="/check">Check Price</ReactBoostrap.Nav.Link>
          <ReactBoostrap.Nav.Link href="/food">Food Menu</ReactBoostrap.Nav.Link>
          <ReactBoostrap.Nav.Link href="/logout">Logout</ReactBoostrap.Nav.Link>
          
          
        </ReactBoostrap.Nav>
      </ReactBoostrap.Navbar.Collapse>
    </ReactBoostrap.Navbar>
                
            </div>
        );
    }
}

export default NavBar2;