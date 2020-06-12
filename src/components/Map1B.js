import React from "react";
import NavBar2 from "./NavBar2";
import Footer from "./Footer";
import map from "../config/map";




class Map1B extends React.Component{
    
    render() {
        console.log(this.props.location.state);
        console.log(map);
        var key = this.props.location.state.src.toLowerCase() + this.props.location.state.dest.toLowerCase()
        this.props.location.state.redi = false
        
            
        return(
            <div className="Route">
                <NavBar2/>
                
                <iframe title = "my map " src={map[key]} width="100%" height="565px" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    
                    
                <Footer/>
            </div>
        );
    }
}


export default Map1B;