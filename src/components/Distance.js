import React from 'react';
import {Redirect} from 'react-router-dom';
class Distance extends React.Component {
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
    render(){
        if(this.state.loggedIn === false){
            return(<Redirect to ="/login"/>)
        }
        return(
            <center>Distance calculator</center>
        );
    }
}

export default Distance;