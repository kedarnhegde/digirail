import React from 'react';
import {bounce , fadeInDown} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import * as ReactBoostrap from 'react-bootstrap';
import {Redirect} from "react-router-dom";


const styles = {
    bounce: {
        animation: 'x 2s' ,
        
        animationName: Radium.keyframes(bounce, 'bounce')
        
    }
}
const styles1 = {
    fadeInUp: {
        
        animation: 'x 7s' , 
        animationName:Radium.keyframes(fadeInDown, 'fadeIn')
    }
}


class Welcome extends React.Component {
    
    state = {
        accountshow: false
    }
    deletethis() {
        this.setState({
            accountshow:true
        })
    }
    componentDidMount() {
        setTimeout(this.deletethis.bind(this), 5000);
    }

    render() {
        return(
        <StyleRoot>
            {this.state.accountshow === true ? <Redirect to="/dashboard"/>: null}
            <div className="welcome" style={styles.bounce}>
                <div className="welcome1">Welcome!</div>
                <div className="Enterbutton" style={styles1.fadeInUp}><ReactBoostrap.Button variant="success" onClick={this.deletethis.bind(this)}>Enter</ReactBoostrap.Button></div>
                
            </div>
            
        </StyleRoot>
        
        );
    }
}

export default Welcome;