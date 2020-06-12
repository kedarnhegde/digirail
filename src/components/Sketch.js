import React from 'react';
import * as ReactBoostrap from 'react-bootstrap'
class Sketch extends React.Component {
    handleclick() {
        fetch('http://localhost:9000/astar', {
                method: 'post',
                
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res);
                if(res.status === 200) {
                    
                }
            }).catch((error) => {
                console.log(error);
            })
    }
    
    
    render() {
        return(
            
            <ReactBoostrap.Button variant="primary" onClick={this.handleclick.bind(this)}>show sketch</ReactBoostrap.Button>
        );
    }
}

export default Sketch ; 