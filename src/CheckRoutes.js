import React from "react";
import NavBar2 from "./components/NavBar";
import Footer from "./components/Footer";
import {Redirect} from "react-router-dom";
class CheckRoutes extends React.Component{
    constructor(props){
        super(props)   
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token === null){
            loggedIn = false
        }
        this.state={
            loggedIn
        }
    }
      render(){  
        if(this.state.loggedIn === true){
          return(<Redirect to="/dashboard"/>)
        }

    
    return(
        <div className="Route">
            <NavBar2/>
                
            <iframe title="mymap" src="https://www.google.com/maps/d/embed?mid=16htSe1ELn84WM3eBebzcZC-Jh-h9Mn1O" width="100%" height="565px"></iframe>


                
                
            <Footer/>
        </div>
    );
      }
}


export default CheckRoutes;