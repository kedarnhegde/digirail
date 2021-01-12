import React from "react";
import BG from "../media/food.jpg";
import * as ReactBoostrap from "react-bootstrap";
import Logo from "../media/Pricelogo.gif";
import NavBar2 from "./NavBar2";
import Footer from "./Footer";
import { Redirect } from "react-router-dom";
import Axios from 'axios';
import FadeIn from 'react-fade-in';
import { FaTruckMonster } from "react-icons/fa";


class CPrice extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            trainno: '',
            
            results: [],
            loggedIn: true,
            data: false,
            load: "Your search results appear here",
            sorry: "Sorry, we have no food for this train",
            redirect2: false,
            nofood: false,
            invalid: false
        }
        // const token = localStorage.getItem("token")
        // let loggedIn = true
        // if (token === null) {
        //     loggedIn = false
        // }

    }

    handleChange(event, element) {
        var value = event.currentTarget.value
        if (element === "trainno") {
            this.setState({
                trainno: value
            })
        }
        
        

    }




    handleClick() {
        if (this.state.trainno === '') {
            alert("Please Enter all the fields of the form");

        }
        else {



            var data = {
                trainno: this.state.trainno,
                // destination: this.state.destination,
                // date: this.state.date,
                // classs: this.state.classs
            }
            console.log(data);
            console.log(this.state);
            // Axios.post('http://localhost:9000/food', data, {

            // })
            Axios.post('http://localhost:9000/food', data, {

                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res);
                this.setState({
                    results: res.data,
                    data: true
                })
                if (this.state.results[0] === undefined){
                    this.setState({
                        invalid: true
                    })  
                }
                else {
                    this.setState({
                        invalid: false
                    })  
                }
                if(this.state.results[0]['tfood'] === 'NO') {
                    this.setState({
                        nofood: true
                    })    
                }
                else {
                    this.setState({
                        nofood: false
                    })  
                }
               
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
                <div className='mb-3 cp_cards'><ReactBoostrap.Card style={{ width: '90%' }}>
                    <FadeIn>
                        <ReactBoostrap.ListGroup variant="pills">
                            <ReactBoostrap.ListGroup.Item>{res.foodtype}</ReactBoostrap.ListGroup.Item>


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
            Train Number
        <ReactBoostrap.Form inline>
                            <ReactBoostrap.FormControl type="number" placeholder="Train number" onChange={(event) => this.handleChange(event, "trainno")} />
                        </ReactBoostrap.Form>
                        <br></br>
      
      
                        <br></br>

                        <ReactBoostrap.Button variant="outline-primary" className="pricebtn" onClick={this.handleClick.bind(this)} >Check Menu</ReactBoostrap.Button>

                    </div>
                    <div className="Resultsbaruthe">
                        <p><i className='Price_list'>
                            {this.state.data ? this.state.nofood ? this.state.sorry : trains : this.state.load}
                            {this.state.invalid ? <Redirect to='/error2'/> : null}
                        
                        </i>
                        </p>

                    </div>




                </div>
                <Footer />
            </div>
        );
    }
}
export default CPrice;