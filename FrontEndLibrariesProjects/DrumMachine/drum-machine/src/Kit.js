import React, { Component } from 'react';

let Q = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
const W = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')
const E = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
const A = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3')
const S = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
const D = new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')
const Z = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
const X = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
const C = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')


class Kit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            disp: 'Click or use your keyboard'
        }
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress);
    }
    playSound = (letter) => {
        letter.currentTime = 0;
        letter.play();
    }

    handleClick = (letter, y) => {

        this.playSound(letter)
        this.setState({
            active: false,
            disp: y
        })
    }

    handleKeyPress(event) {
        event.preventDefault();
        if (event.keyCode === 81) {
            this.playSound(Q);
            this.setState({
                active: true,
                disp: 'Bass'
            })
        }
        if (event.keyCode === 87) {
            this.playSound(W);
            this.setState({
                active: true,
                disp: 'Kick \'n\' Bass'
            })

        }
        if (event.keyCode === 69) {
            this.playSound(E);
            this.setState({
                active: true,
                disp: 'Tssst'
            })

        }
        if (event.keyCode === 65) {
            this.playSound(A);
            this.setState({
                active: true,
                disp: 'Hi-Hat'
            })

        }
        if (event.keyCode === 83) {
            this.playSound(S);
            this.setState({
                active: true,
                disp: 'Da-na'
            })

        }
        if (event.keyCode === 68) {
            this.playSound(D);
            this.setState({
                active: true,
                disp: 'Snare'
            })

        }
        if (event.keyCode === 90) {
            this.playSound(Z);
            this.setState({
                active: true,
                disp: 'Zoom'
            })

        }
        if (event.keyCode === 88) {
            this.playSound(X);
            this.setState({
                active: true,
                disp: 'ClackSynth'
            })

        }
        if (event.keyCode === 67) {
            this.playSound(C);
            this.setState({
                active: true,
                disp: 'KnockSynth'
            })

        }
    }
    render() {

        return (
            <div id="display" classname='row'>{this.state.disp}
                <div id="pads" className="row">
                    <div className="col-1" id="q">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.handleClick(Q, 'Bass')}>Q<audio src={Q} className="clip" id="q" /></button>
                    </div>
                    <div className="col-1" id="w">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.handleClick(W, 'Kick-n-Bass')}>W<audio src="" className="clip" id="w" /></button>
                    </div>
                    <div className="col-1" id="e">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.handleClick(E, 'Tsst!')}>E<audio src="" className="clip" id="e" /></button>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-1" id="a">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.handleClick(A, 'Hi-Hat')}>A<audio src="" className="clip" id="a" /></button>
                    </div>
                    <div className="col-1" id="s">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.handleClick(S, 'Da-na')}>S<audio src="" className="clip" id="s" /></button>
                    </div>
                    <div className="col-1" id="d">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.handleClick(D, 'Snare')}>D<audio src="" className="clip" id="d" /></button>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-1" id="z">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.handleClick(Z, 'Zoom')}>Z<audio src="" className="clip" id="z" /></button>
                    </div>
                    <div className="col-1" id="x">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.handleClick(X, 'ClackSynth!')}>X<audio src="" className="clip" id="x" /></button>
                    </div>
                    <div className="col-1" id="c">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.handleClick(C, 'KnockSynth')}>C<audio src="" className="clip" id="c" /></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Kit;