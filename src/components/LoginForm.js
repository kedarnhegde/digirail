import React from "react";
import * as ReactBoostrap from "react-bootstrap";
import {Redirect} from 'react-router-dom';


class LoginForm extends React.Component {
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
    state = {
        email: "",
        password: "",
        redirect : false,
        showerror: false,
        
    }
    handleChange(event, element) {
        
        var value = event.currentTarget.value
        if(element === "email") {
            this.setState({
                email: value
            })
        }
        else {
            this.setState({
                password: value
            })
        }
    }

    handleClick(event) {
        if( this.state.email === undefined || this.state.password === undefined ){
            alert("Please Enter all the fields");
        }
        else{
            var data = {
                email: this.state.email,
                password: this.state.password
            }
            fetch('http://localhost:9000/login', {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res);
                
                if(res.status === 200) {
                    localStorage.setItem("token","jasdkahsdkahsdka")
                    this.setState({
                        redirect: true
                    })
                }
                else{
                    this.setState({
                        showerror:true
                    })
                }
            }).catch((error) => {
                console.log(error);
                
            })
        }
    }

    render() {
        if(this.state.loggedIn === true){
            return(<Redirect to ='/dashboard'/>)
        }
        return(
                <ReactBoostrap.Form inline className = "Form" >
                    {this.state.redirect === true ? <Redirect to="/welcome"/>: null}
                    {this.state.showerror === true ? <Redirect to ="/error"/>:null}
                    
                    <ReactBoostrap.FormControl type="email" placeholder="Email" className="Loginemail" onChange={(event) => this.handleChange(event, "email")}/>
                    <ReactBoostrap.FormControl type="password" placeholder="Password" className="Loginpassword" onChange={(event) => this.handleChange(event, "password")}/>
                    <a href="/" className="forgpass">Forgot Password</a>
                    <ReactBoostrap.Button variant = "success" className = "LoginButton" onClick={this.handleClick.bind(this)} >Login</ReactBoostrap.Button> 
                    
                    
                </ReactBoostrap.Form> 
        );
    }
}

export default LoginForm;