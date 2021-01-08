import React from "react";
import BG from "../media/BG.jpg";
import * as ReactBoostrap from "react-bootstrap";
import Logo from "../media/Pricelogo.gif";
import NavBar2 from "./NavBar2";
import Footer from "./Footer";
import { Redirect } from "react-router-dom";
import Axios from 'axios';
import FadeIn from 'react-fade-in';


class CPrice extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            source: '',
            destination: '',
            classs: '',
            results: [],
            loggedIn: true,
            data: false,
            load: "Your search results appear here"
        }
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token === null) {
            loggedIn = false
        }

    }

    handleChange(event, element) {
        var value = event.currentTarget.value
        if (element === "source") {
            this.setState({
                source: value
            })
        }
        else if (element === "destination") {
            this.setState({
                destination: value
            })
        }
        else if (element === "classs") {
            this.setState({
                classs: value
            })
        }
        console.log(this.state.source);

    }




    handleClick() {
        if (this.state.source === '' || this.state.destination === '' || this.state.date === '' || this.state.classs === '') {
            alert("Please Enter all fields of the form");

        }
        else {



            var data = {
                source: this.state.source,
                destination: this.state.destination,
                date: this.state.date,
                classs: this.state.classs
            }
            Axios.post('http://localhost:9000/dashboard', data, {

                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res);
                this.setState({
                    results: res.data,
                    data: true
                })
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    render() {
        if (this.state.loggedIn === false) {
            return (<Redirect to="/login" />);
        }
        const trains = this.state.results.map((res) => {
            return (
                // <div className='col-12 col-sm-6'>
                //     <h2 className='check_pr'>Train No : <h4>{res.trainno}</h4></h2>
                //     <h2 className='check_pr'>Train Name : <h4>{res.traintype}</h4></h2>
                //     <h2 className='check_pr'>Cost({this.state.classs}): <h4>{this.state.classs === "ac" ? res.acpr : res.normalpr} </h4></h2>
                //     <hr className='check_line' />
                // </div>
                <div><ReactBoostrap.Card style={{ width: '35rem' }}>
                                <FadeIn>
                                    <ReactBoostrap.ListGroup variant="pills">
                                        <ReactBoostrap.ListGroup.Item>{res.trainno}</ReactBoostrap.ListGroup.Item>
                                        <ReactBoostrap.ListGroup.Item>{res.traintype}</ReactBoostrap.ListGroup.Item>
                                        
                                        <ReactBoostrap.ListGroup.Item><h4 className='check_pr'>Cost({this.state.classs}): <h5>{this.state.classs === "ac" ? res.acpr : res.normalpr} </h5></h4></ReactBoostrap.ListGroup.Item>
                                        
                                    </ReactBoostrap.ListGroup>
                                </FadeIn>
                            </ReactBoostrap.Card></div>
            );
        })
        return (
<div className='Cprice_bg'>
            <div className="image">
                <NavBar2 />
                <img src={BG} width="100%" height="650px" alt="logo" />
                <div className="Price">
                    <img src={Logo} className="giflogo" width="150px" height="100px" alt="logo" />
                    <br></br>
                    <br></br>
            Source
        <ReactBoostrap.Form inline>
                        <ReactBoostrap.FormControl type="text" placeholder="Source" onChange={(event) => this.handleChange(event, "source")} />
                    </ReactBoostrap.Form>
                    <br></br>
      Destination
      <ReactBoostrap.Form inline>
                        <ReactBoostrap.FormControl type="text" placeholder="Destination" onChange={(event) => this.handleChange(event, "destination")} />
                    </ReactBoostrap.Form>
                    <br></br>
      Class
      <ReactBoostrap.Form inline>
                        <ReactBoostrap.FormControl type="text" placeholder="Normal/AC" onChange={(event) => this.handleChange(event, "classs")} />
                    </ReactBoostrap.Form>
                    <br></br>

                    <ReactBoostrap.Button variant="outline-primary" className="pricebtn" onClick={this.handleClick.bind(this)} >Check Price</ReactBoostrap.Button>

                </div>
                <div className="Resultsbaruthe">
                    <p><i className='Price_list'>{this.state.data ? trains : this.state.load}</i></p>

                </div>




                </div>
                <Footer />
            </div>
        );
    }
}
export default CPrice;