import React from "react";
import BG from "../media/BG.gif";
import * as ReactBoostrap from "react-bootstrap";
import Logo from "../media/Pricelogo.gif";
import NavBar from "./NavBar";
import Footer from "./Footer";

function CPrice() {
    return(
        
        <div className = "image">
            <NavBar/>
            <img src={BG} width="100%" height="650px" alt="logo" />
        <div className="Price">
        <img src={Logo} className="giflogo" width="150px" height="100px" alt="logo" />
        <br></br>
        <br></br>
            Source
        <ReactBoostrap.Form inline>
      <ReactBoostrap.FormControl type="text" placeholder="Source" />
      </ReactBoostrap.Form>
      <br></br>
      Destination
      <ReactBoostrap.Form inline>
      <ReactBoostrap.FormControl type="text" placeholder="Destination" />
      </ReactBoostrap.Form>
      <br></br>
      Date of Journey
      <ReactBoostrap.FormControl type="date" placeholder="dd/mm/yyyy" />
      <br></br>
      Class
      <ReactBoostrap.Form inline>
      <ReactBoostrap.FormControl type="text" placeholder="Normal/AC" />
      </ReactBoostrap.Form>
      <br></br>
    
      <ReactBoostrap.Button variant="outline-dark" className="pricebtn" href="/#">Check Price</ReactBoostrap.Button>
        
            </div>
            <div className = "Resultsbaruthe">
      <p><i>Your Search Results will be displayed here</i></p>
      
            </div>
            
    <Footer/>
    
        
    </div>
    );
}
export default CPrice;
