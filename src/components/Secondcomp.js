import React from "react";
import Video1 from "../media/video2_1.mp4";
import * as ReactBoostrap from "react-bootstrap";

function Secondcomp() {
    return(
        <div className = "image">
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
                <source src = {Video1} type = "video/mp4" />
            </video>
            <div className="content">
    <h1><center>Railway Route Optimization</center></h1>
    <p>The main objective of the Railway Route Optimization project is to help the passengers to know the shortest path to reach the destination as early as possible and within less time and with minimum cost when more than one Railway route is there to reach the destination. This system is very helpful for the tourists and daily passengers.By using this system, the user can know the train details like train starting point and ending point, starting time and arrival time, charge for a starting point to ending point. Also he can view the graphical representation of the train route from starting point to the ending point. This system is very user-friendly and works efficiently. </p>
    
  </div>
  <div className = "getstarted">
      <div className="line1">Find the <h1>SHORTEST</h1></div>
      <div className="line3">and more</div>
      <div className="line4"><h1>CONVENIENT</h1></div>
      < div className="line5">path to travel</div>        
      <ReactBoostrap.Button variant="outline-success" className="btn-prim" href="/login">Get Started</ReactBoostrap.Button>
       
  </div>
  
            
        </div>
    
    );
    
    
}


export default Secondcomp;