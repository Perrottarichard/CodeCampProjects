import React, { Component } from 'react';
import Buttons from './Buttons.js'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='row' id='display'>{this.props.input}</div>
        );
    }
}

export default Display;