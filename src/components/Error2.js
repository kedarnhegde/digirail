import React from 'react';
import * as ReactBoostrap from 'react-bootstrap';
import error from "../media/error.gif"
class Error extends React.Component {
    render() {
        return(
            <div className="image">
                <img src={error} className="erroro" width="650px" height="500px" alt="logo" />
            <div className = "error">
                <h1>Oops! Something Wrong Happened!</h1>
                <h5>Enter valid input fields, and try again!</h5>
                <ReactBoostrap.Button variant = 'outline-primary' href = '/login'>Go Back</ReactBoostrap.Button>
            </div>
            </div>
        )
    }
}

export default Error;