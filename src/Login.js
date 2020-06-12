import React from "react";
// import Login1 from "./components/Login1.js";
import Login2 from "./components/Login2.js";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import {Redirect} from "react-router-dom";
class Login extends React.Component {
    
        
    
    
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
    render() {
        
        if(this.state.loggedIn === true){
            return(<Redirect to ="/dashboard"/>);
        }
        return(
            <div className="Login">
                <Navbar/>
                {/* <Login1/> */}
                <Login2/>
                <Footer/>
                
            </div>
        );
    }

}

export default Login;