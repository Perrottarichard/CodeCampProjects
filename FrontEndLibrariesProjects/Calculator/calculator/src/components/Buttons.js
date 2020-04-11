// eslint-disable-next-line
import React, { Component } from 'react';
import Display from './Display';


class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accumulated: ['0'],
            currentValue: '0',
            preVal: '0',
            isOperator: false,
            isLimit: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.evaluate = this.evaluate.bind(this);
    }
    evaluate(equation) {
        let result = equation.join('');
        return eval(result);

    }
    handleClick(e) {
        e.preventDefault();
        if (this.state.accumulated[0] === '0') { //remove default '0' value
            this.state.accumulated.pop()
            this.state.accumulated.push(e.target.value) //push clicked value to array
        } else if (this.state.accumulated.length > 12) {
            this.state.accumulated = ['MAX LIMIT'] //display max limit
        } else if (e.target.value === 'allClear') { //handle AC button
            this.state.accumulated = ['0']
        } else if (e.target.value === '=') { //handle = button
            this.state.accumulated = [this.evaluate(this.state.accumulated)]
        }
        else {
            this.state.accumulated.push(e.target.value)
        }
        //console.log(this.state.accumulated)
        this.setState({ //set state to display the accumulated array
            accumulated: this.state.accumulated
        })
    }
    render() {
        return (
            <div>
                <Display accumulated={this.state.accumulated} />
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