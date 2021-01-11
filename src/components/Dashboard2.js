import React from 'react';
import Dashboard_video from '../media/Dashboard_video.mp4';
import log from '../media/logo.gif';
import * as ReactBoostrap from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import Footer from "./Footer";
import FadeIn from 'react-fade-in';
import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css'; 

class Dashboard2 extends React.Component {

    state = {
        source: '',
        destination: '',
        date: '',
        classs: '',
        redirect: false,
        loading: true,
        redirect1: false,
        data1: '',
        isdatapresent: false,
        results: [],
        
    }
    // yesterday = moment().subtract(1, 'day');
    disablePastDt = current => {
        return current.isAfter();
      };
   
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
        else if (element === "date") {
            this.setState({
                date: value
            })
        }
        else {
            this.setState({
                classs: value
            })
        }

    }
    handleClick2() {
        if (this.state.source === '' || this.state.destination === '') {
            alert("Please Enter all the fields of the form");
        }
        else {
        console.log(this.state.source)
        console.log(this.state.destination)

        this.setState({
            redirect: true
        })
    }


    }
    handleClick = async () => {
        if (this.state.source === '' || this.state.destination === ''  || this.state.classs === '') {
            alert("Please Enter all the fields of the form");
        }
        else if(this.state.source.toUpperCase() === this.state.destination.toUpperCase()) {
                alert('You are already in ' + this.state.source.toUpperCase());
        }
        else {
            var data = {
                source: this.state.source,
                destination: this.state.destination,
                date: this.state.date,
                classs: this.state.classs
            }
            const settings = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            };
            try {
                const res = await fetch(`http://localhost:9000/dashboard`, settings);
                if (res.status === 200) {
                    this.setState({
                        loading: false
                    })
                }
                const result = await res.json()

                console.log(result.length)
                if (result.length === 0) {
                    this.setState({
                        redirect1: true

                    })
                    return result
                }
                else {
                    this.setState({
                        isdatapresent: true
                    })
                }
                this.setState({
                    data1: result
                })
                console.log(this.state.data1)
                this.setState({
                    results: result.map(train => {
                        return (
                            <div><ReactBoostrap.Card style={{ width: '35rem' }}>
                                <FadeIn>
                                    <ReactBoostrap.ListGroup variant="pills">
                                        <ReactBoostrap.ListGroup.Item>{train.trainno}</ReactBoostrap.ListGroup.Item>
                                        <ReactBoostrap.ListGroup.Item>{train.traintype}</ReactBoostrap.ListGroup.Item>
                                        <ReactBoostrap.ListGroup.Item>{train.depttime}</ReactBoostrap.ListGroup.Item>
                                        <ReactBoostrap.ListGroup.Item><h4 className='check_pr'>Cost({this.state.classs}): <h5>{this.state.classs.toUpperCase() === "AC" ? train.acpr : train.normalpr} </h5></h4></ReactBoostrap.ListGroup.Item>
                                    </ReactBoostrap.ListGroup>
                                </FadeIn>
                            </ReactBoostrap.Card></div>
                        )
                    })
                })
                return (this.state.results)
            } catch (e) {
                return e;
            }
        }
    }


    render() {



        return (
            <div className='dashimage'>
                {this.state.redirect === true ? <Redirect to={{ pathname: "/map", state: { src: this.state.source, dest: this.state.destination, redi: this.state.redirect } }} /> : console.log(this.state)}
                {this.state.redirect1 === true ? <Redirect to="/error2" /> : null}
                
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        position: "fixed",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        bottom: "0",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%,-50%)",
                        zIndex: "-1"
                    }}
                >
                    <source src={Dashboard_video} type="video/mp4" />
                </video>

                <div className='contain'>
                    <img src={log} alt='writinglogo' />
                    <ReactBoostrap.Form inline className="details" >
                        <label>Source</label>
                        <ReactBoostrap.FormControl type="text" placeholder="Source e.x: Bangalore" className="source" id="inputdefault" onChange={(event) => this.handleChange(event, "source")} />
                        <label>Destination</label>
                        <ReactBoostrap.FormControl type="text" placeholder="Destination e.x: Delhi" className="destination" id="inputdefault" onChange={(event) => this.handleChange(event, "destination")} />
                        <label>Date of Journey</label>
                        {/* <ReactBoostrap.FormControl type="date" placeholder="DD/MM/YYYY"
                            className="dates" onChange={(event) => this.handleChange(event, "date")} /> */}
                            <DatePicker
    isValidDate={this.disablePastDt.bind(this)}
  />
    
                        <label className="classes">Classes</label>
                        <ReactBoostrap.FormControl type="text" placeholder="Normal/AC"
                            className="trainclass" onChange={(event) => this.handleChange(event, "classs")} />
                        <ReactBoostrap.Button variant="primary" className="trainbtn" onClick={this.handleClick.bind(this)}>Find Trains</ReactBoostrap.Button>
                        <ReactBoostrap.Button variant="success" className="mapbtn" onClick={this.handleClick2.bind(this)}>Show Map</ReactBoostrap.Button>
                    </ReactBoostrap.Form>
                </div>
                <div className="contain1">
                    {this.state.loading === true ? <p className='yet_to_search'>Please fill the form to get Trains</p> :

                        this.state.results}




                </div>
                <Footer />
            </div>
        );
    }
}
export default Dashboard2;