// eslint-disable-next-line
import React, { Component } from 'react';
import Display from './Display';

class Buttons extends React.Component {
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
        this.isValid = this.isValid.bind(this);
        this.reset = this.reset.bind(this);
        this.testDec = this.testDec.bind(this);
    }
    reset(num) {
        this.setState({
            accumulated: ['0']
        }
        )
    }
    testDec(exp) {
        exp = exp.join('');
        let decReg = new RegExp(/\.+\d*\./g)
        //console.log(exp)
        //console.log(decReg.test(exp));
        if (decReg.test(exp)) {
            //console.log('wtf');
            this.state.accumulated.pop();
            // setTimeout(() => {
            //     this.reset(0);
            // }, 2000);
        } else {
            //console.log('bla');
            this.setState({
                accumulated: this.state.accumulated
            })
        }
    }
    evaluate(equation) {
        //let joined = equation.join('');
        let result = eval(equation).toString();
        // console.log(result.length)
        if (result.length < 12) { //avoid result being too long
            return [result];
        } else {
            return [Number(result).toFixed(10)] //limit result to 10 decimal places
        }

    }
    isValid(expression) {
        expression = expression.join('');
        return expression.replace(/\.\./g, '.').replace(/\+\+/g, "+").replace(/\*\*/g, '*').replace(/\/\*/g, "*").replace(/\*\\/g, "/").replace(/\/\//g, '/').replace(/--/g, '+').replace(/\/\+/g, '+').replace(/\+\//g, "/").replace(/\+\*/g, '*').replace(/-\//g, '/').replace(/-\*/g, '*').replace(/\*\+/g, "+").replace(/\*-\+/g, '+').toString();
    }

    handleClick(e) {
        if (this.state.accumulated[0] === '0') { //remove default '0' value
            this.state.accumulated.pop()
            this.state.accumulated.push(e.target.value) //push clicked value to array
        } else if (this.state.accumulated === 'INVALID' || this.state.accumulated === '') {
            this.state.accumulated = ['0'];
        } else if (this.state.accumulated.length > 12) {
            this.state.accumulated = ['MAX LIMIT'] //display max limit
        } else if (e.target.value === '') { //handle AC button
            this.state.accumulated = ['0']
        } else if (e.target.value === '=') {
            //handle = button
            let almost = this.isValid(this.state.accumulated)
            console.log(almost);

            this.state.accumulated = this.evaluate(almost)
            // setTimeout(() => {
            //     this.reset(0);
            // }, 2000);

        }
        else if (e.target.value === '.' && this.state.accumulated.includes('.')) {
            console.log('working?');

            this.state.accumulated.push(e.target.value)
            this.testDec(this.state.accumulated)
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
                    <div className='col'><button value='' onClick={this.handleClick} className='btn' id='clear'>AC</button></div>
                    <div className='col' id=''></div>
                </div>
            </div>
        );
    }
}


export default Buttons;