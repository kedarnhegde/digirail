import React from 'react';
import './App.css';
import Home from "./Home.js";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import Welcome from "./components/Welcome";
import CheckRoutes from "./CheckRoutes.js";
import {Route} from "react-router-dom";
import About from "./About.js";
import Contact from "./Contact.js";
import Error from "./components/Error.js";
import algo from "./components/Algo";
import Cprice from "./components/Cprice";
import Checkhome from "./components/Homecheck";
import Rout from "./components/Route";
import Map1B from "./components/Map1B";
import Sketch from "./components/Sketch";
import logo from "./components/Logout";
import distance from "./components/Distance";
import Error2 from "./components/Error2.js";
import Food from "./components/checkFood.js";
class App extends React.Component {
  
  
  render() {
      return (
        <div className="App">
          <Route exact path="/login" component={Login} />
          <Route exact path="/routes" component={CheckRoutes} />
          <Route exact path="/route" component={Rout}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component ={Dashboard}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} /> 
          <Route exact path="/welcome" component ={Welcome} />
          <Route exact path="/error" component = {Error}/>
          <Route exact path="/check" component = {Cprice}/>
          <Route exact path="/price" component = {Checkhome}/>
          <Route exact path="/map" component = {Map1B}/>
          <Route exact path = "/sketch" component = {Sketch}/>
          <Route exact path = "/logout" component = {logo}/>
          <Route exact path = "/calculate" component = {distance}/>
          <Route exact path ="/algo" component = {algo}/>
          <Route exact path="/error2" component = {Error2}/>
          <Route exact path="/food" component= {Food} />
        </div>
      );
  }
}

export default App;