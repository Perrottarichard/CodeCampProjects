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

//const onKeyDown = (letter) => playSound(letter);

class Kit extends Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    playSound = (letter) => letter.play();

    handleKeyPress(event) {
        if (event.keyCode === 81) {
            this.playSound(Q);
        }
        if (event.keyCode === 87) {
            this.playSound(W);
        }
        if (event.keyCode === 69) {
            this.playSound(E);
        }
        if (event.keyCode === 65) {
            this.playSound(A);
        }
        if (event.keyCode === 83) {
            this.playSound(S);
        }
        if (event.keyCode === 68) {
            this.playSound(D);
        }
        if (event.keyCode === 90) {
            this.playSound(Z);
        }
        if (event.keyCode === 88) {
            this.playSound(X);
        }
        if (event.keyCode === 67) {
            this.playSound(C);
        }
    }
    render() {

        return (
            <div id="display" classname='row'>sound text here
                <div id="pads" className="row">
                    <div className="col-sm-1" id="q">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.playSound(Q)}>Q<audio src="" className="clip" id="q" /></button>
                    </div>
                    <div className="col-sm-1" id="w">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.playSound(W)}>W<audio src="" className="clip" id="w" /></button>
                    </div>
                    <div className="col-sm-1" id="e">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.playSound(E)}>E<audio src="" className="clip" id="e" /></button>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm-1" id="a">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.playSound(A)}>A<audio src="" className="clip" id="a" /></button>
                    </div>
                    <div className="col-sm-1" id="s">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.playSound(S)}>S<audio src="" className="clip" id="s" /></button>
                    </div>
                    <div className="col-sm-1" id="d">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.playSound(D)}>D<audio src="" className="clip" id="d" /></button>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm-1" id="z">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.playSound(Z)}>Z<audio src="" className="clip" id="z" /></button>
                    </div>
                    <div className="col-sm-1" id="x">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.playSound(X)}>X<audio src="" className="clip" id="x" /></button>
                    </div>
                    <div className="col-sm-1" id="c">
                        <button type="button" className="drum-pad btn btn-dark" onClick={(e) => this.playSound(C)}>C<audio src="" className="clip" id="c" /></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Kit;