// eslint-disable-next-line
import React, { Component } from 'react';
import Display from './Display';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '0',
            preVal: '0',
            isOperator: false,
            isLimit: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        let operators = ['+', '-', '*', '/'];
        if (operators.includes(e.target.value)) {
            console.log('it is an operator');
        } else {
            console.log('it is not an operator');

        }
        this.setState({
            input: e.target.value.toString()
        })
    }
    render() {
        return (
            <div>
                <Display input={this.state.input} />
                <div className='row'>
                    <div className='col'><button value='7' onClick={this.handleClick} className='btn' id='seven'>7</button></div>
                    <div className='col'><button value='8' onClick={this.handleClick} className='btn' id='eight'>8</button></div>
                    <div className='col'><button value='9' onClick={this.handleClick} className='btn' id='nine'>9</button></div>
                    <div className='col'>
                        <div className='short-div'><button value='/' onClick={this.handleClick} className='btn' id='divide'>/</button></div>
                        <div className='short-div'><button value='*' onClick={this.handleClick} className='btn' id='multiply'>*</button></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'><button value='4' onClick={this.handleClick} className='btn' id='four'>4</button></div>
                    <div className='col'><button value='5' onClick={this.handleClick} className='btn' id='five'>5</button></div>
                    <div className='col'><button value='6' onClick={this.handleClick} className='btn' id='six'>6</button></div>
                    <div className='col'>
                        <div className='short-div'><button value='-' onClick={this.handleClick} className='btn' id='subtract'>-</button></div>
                        <div className='short-div'><button value='+' onClick={this.handleClick} className='btn' id='add'>+</button></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'><button value='1' onClick={this.handleClick} className='btn' id='one'>1</button></div>
                    <div className='col'><button value='2' onClick={this.handleClick} className='btn' id='two'>2</button></div>
                    <div className='col'><button value='3' onClick={this.handleClick} className='btn' id='three'>3</button></div>
                    <div className='col'><button value='=' onClick={this.handleClick} className='btn' id="equals">=</button></div>
                </div>
                <div className='row'>
                    <div className='col'><button value='.' onClick={this.handleClick} className='btn' id='decimal'>.</button></div>
                    <div className='col'><button value='0' onClick={this.handleClick} className='btn' id='zero'>0</button></div>
                    <div className='col'><button value='allClear' onClick={this.handleClick} className='btn' id='clear'>AC</button></div>
                    <div className='col' id=''></div>
                </div>
            </div>
        );
    }
}

export default Buttons;