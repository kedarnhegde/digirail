import React from "react";
import Video3 from "./media/Video3.mp4";
import * as ReactBoostrap from "react-bootstrap";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer"
import {Redirect} from "react-router-dom";
class Contact extends React.Component {
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
        firstname:'',
        lastname:'',
        number:'',
        desc:'',
        redirect:false,
        
    }
    handlechange(event,element){
        var value = event.currentTarget.value;
        if(element === "firstname"){
            this.setState({
                firstname:value
            })
        }
        if(element === "lastname"){
            this.setState({
                lastname:value
            })
        }
        if(element === "number"){
            this.setState({
                number:value
            })
        }
        if(element === "desc"){
            this.setState({
                desc:value
            })
        }

    }
    handleclick(event){
        if( this.state.firstname === undefined || this.state.lastname === undefined || this.state.number === undefined){
            alert("Please Enter all the fields");
            
        }
        else{
            var data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                number:this.state.number,
                desc:this.state.desc
            }
            
            
            fetch('http://localhost:9000/contact', {
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
    render(){  
        if(this.state.loggedIn === true){
          return(<Redirect to="/dashboard"/>)
        }
        return(
            <div className = "image">
                <NavBar/>
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        position:"fixed",
                        width:"100%",
                        left:"50%",
                        top:"50%",
                        bottom:"0",
                        height:"100%",
                        objectFit:"cover",
                        transform: "translate(-50%,-50%)",
                        zIndex:"-1"
                    }}
                    >
                    <source src = {Video3} type = "video/mp4" />
                </video>
            
                
    <div className="contact">
        <h3> Get in touch with us!!</h3>
    <ReactBoostrap.Form inline>
        <ReactBoostrap.FormControl type="text" placeholder="First Name" onChange={(event)=>this.handlechange(event,"firstname")} />
        </ReactBoostrap.Form>
        <br></br>
        <ReactBoostrap.Form inline>
        <ReactBoostrap.FormControl type="text" placeholder="Last Name" onChange={(event)=>this.handlechange(event,"lastname")}/>
        </ReactBoostrap.Form>
        <br></br>
        
        <ReactBoostrap.Form inline>
        <ReactBoostrap.FormControl type="number" placeholder="Contact Number" onChange={(event) =>this.handlechange(event,"number")} />
        <br></br>
        </ReactBoostrap.Form>
        <ReactBoostrap.Form inline>
            <div className="check">
        <ReactBoostrap.FormControl type="checkbox"  />Do you want us to call back?</div>
        </ReactBoostrap.Form>
        
        <ReactBoostrap.Form>
        
        <ReactBoostrap.Form.Group controlId="exampleForm.ControlTextarea1" >
            
            
        
        <ReactBoostrap.Form.Control as="textarea" rows="4" placeholder="How can we help you?" onChange={(event) =>this.handlechange(event,"desc")} />
    </ReactBoostrap.Form.Group>
        </ReactBoostrap.Form>
        <ReactBoostrap.Form inline>
            
    <ReactBoostrap.Button variant="dark" className="btn-prim" onClick={this.handleclick.bind(this)}>Submit</ReactBoostrap.Button>
    <br></br>
    {this.state.redirect === true ? <i>We will contact you soon!</i>:null}
    </ReactBoostrap.Form>
    </div>
            <Footer/>
        </div>
        );
    }
}
export default Contact;
