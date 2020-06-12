import React from "react";
import NavBar2 from "./NavBar";
import Footer from "./Footer";

function Route (){
    
    return(
        <div className="Route">
            <NavBar2/>
                
            <iframe title="mymap" src="https://www.google.com/maps/d/embed?mid=16htSe1ELn84WM3eBebzcZC-Jh-h9Mn1O" width="100%" height="565px"></iframe>


                
                
            <Footer/>
        </div>
    );
}


export default Route;