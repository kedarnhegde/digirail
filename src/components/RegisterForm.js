import React from "react";
import * as ReactBoostrap from "react-bootstrap";
import {Redirect} from 'react-router-dom';

class LoginForm extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        redirect: false
    }

    handleChange(event, element) {
        var value = event.currentTarget.value
        if(element === "email") {
            this.setState({
                email: value
            })
        }
        else if(element === "username") {
            this.setState({
                username: value
            })
        }
        else {
            this.setState({
                password: value
            })
        }
    }

    handleClick(event) {
        if( this.state.username==='' || this.state.email==='' || this.state.password===''){
            alert("Please Enter all fields");
        }
        else{
            var data = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
            fetch('http://localhost:9000/register', {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res);
                if(res.status === 200) {
                    this.setState({
                        redirect: true
                    })
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    render() {
        return(
                <ReactBoostrap.Form inline className = "Form1" >
                    {this.state.redirect === true ? <Redirect to="/welcome"/>: null}
                    <ReactBoostrap.FormControl type="text" placeholder="Username" className="Loginusername" onChange={(event) => this.handleChange(event, "username")}/>
                    <ReactBoostrap.FormControl type="email" placeholder="Email" className="Loginemail" onChange={(event) => this.handleChange(event, "email")}/>
                    <ReactBoostrap.FormControl type="password" placeholder="Password" className="Loginpassword" onChange={(event) => this.handleChange(event, "password")}/>
                    <ReactBoostrap.Button variant = "primary" className = "RegisterButton" onClick={this.handleClick.bind(this) }>Register</ReactBoostrap.Button> 
                </ReactBoostrap.Form> 
        );
    }
}

export default LoginForm;