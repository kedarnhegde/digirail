import React from "react";
import BG from "../media/BG.gif";
import * as ReactBoostrap from "react-bootstrap";
import Logo from "../media/Pricelogo.gif";
import NavBar2 from "./NavBar2";
import Footer from "./Footer";
import {Redirect} from "react-router-dom";
class CPrice extends React.Component {
    state = {
        source: '',
        destination: '',
        classs : '',
    }
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token === null){
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    
    handleChange(event , element) {
        var value = event.currentTarget.value
        if(element === "source") {
            this.setState({
                source: value
            })
        }
        else if(element === "destination"){
            this.setState({
                destination: value
            })
        }
        else if(element === "classs"){   
            this.setState({
                classs:value
            })
        }

    }
    
        
        
    
    handleClick(event) {
        if(this.state.source ==='' || this.state.destination==='' || this.state.date==='' || this.state.classs==='' ){
            alert("Please Enter all fields of the form");
            
        }
        else{
            
            
            
            var data = {
                source: this.state.source,
                destination: this.state.destination,
                date: this.state.date,
                classs:this.state.classs
            }
            fetch('http://localhost:9000/dashboard', {
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
        if(this.state.loggedIn === false){
            return(<Redirect to ="/login"/>);
        }
        return(
            
            <div className = "image">
            <NavBar2/>
            <img src={BG} width="100%" height="650px" alt="logo" />
        <div className="Price">
        <img src={Logo} className="giflogo" width="150px" height="100px" alt="logo" />
        <br></br>
        <br></br>
            Source
        <ReactBoostrap.Form inline>
      <ReactBoostrap.FormControl type="text" placeholder="Source" onChange = {(event) => this.handleChange(event, "source")}/>
      </ReactBoostrap.Form>
      <br></br>
      Destination
      <ReactBoostrap.Form inline>
      <ReactBoostrap.FormControl type="text" placeholder="Destination" onChange = {(event) => this.handleChange(event, "destination")}/>
      </ReactBoostrap.Form>
      <br></br>
      Class
      <ReactBoostrap.Form inline>
      <ReactBoostrap.FormControl type="text" placeholder="Normal/AC" onChange = {(event) => this.handleChange(event,"classs")}/>
      </ReactBoostrap.Form>
      <br></br>
    
      <ReactBoostrap.Button variant="outline-primary" className="pricebtn" >Check Price</ReactBoostrap.Button>
        
            </div>
            <div className = "Resultsbaruthe">
      <p><i>Your Search Results will be displayed here</i></p>
      
            </div>
            
    
    
        
<Footer/>
    </div>
    );
}
}
export default CPrice;
