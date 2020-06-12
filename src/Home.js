import React from 'react';
import Firstcomponet from "./components/Firstcomponet";
import Secondcomp from "./components/Secondcomp";
import Footer from "./components/Footer";
import {Redirect} from "react-router-dom";

class Home extends React.Component {
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
      return(<Redirect to ="/dashboard"/>);
    }
    return (
      <div className="App">
        <Firstcomponet
          height = "100px"
          width = "100%"
        />
        <Secondcomp/>
        
        <Footer/>
        
      </div>
      
      
      
    );
  }
}

export default Home;