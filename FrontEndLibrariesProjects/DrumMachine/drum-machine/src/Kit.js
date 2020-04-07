import React, { Component } from 'react';

const playSound = (letter) => letter.play();

let Q = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
const W = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')
const E = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
const A = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3')
const S = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
const D = new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')
const Z = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
const X = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
const C = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')

// let keyCodes = {
//   81: 'Q',
//   87: 'W',
//   69: 'E',
//   65: 'A',
//   83: 'S',
//   68: 'D',
//   90: 'Z',
//   88: 'X',
//   67: 'C'
// }
class Kit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    render() {
        return (
            <div id="display" className="row">
                <div className="col-sm-1" id="q">
                    <button type="button" className="drum-pad btn btn-dark" onClick={(e) => playSound(Q)}>Q<audio src="" className="clip" id="q" /></button>
                </div>
                <div className="col-sm-1" id="w">
                    <button type="button" className="drum-pad btn btn-dark" onClick={(e) => playSound(W)}>W<audio src="" className="clip" id="w" /></button>
                </div>
                <div className="col-sm-1" id="e">
                    <button type="button" className="drum-pad btn btn-dark" onClick={(e) => playSound(E)}>E<audio src="" className="clip" id="e" /></button>
                </div>
                <div className="w-100"></div>
                <div className="col-sm-1" id="a">
                    <button type="button" className="drum-pad btn btn-dark" onClick={(e) => playSound(A)}>A<audio src="" className="clip" id="a" /></button>
                </div>
                <div className="col-sm-1" id="s">
                    <button type="button" className="drum-pad btn btn-dark" onClick={(e) => playSound(S)}>S<audio src="" className="clip" id="s" /></button>
                </div>
                <div className="col-sm-1" id="d">
                    <button type="button" className="drum-pad btn btn-dark" onClick={(e) => playSound(D)}>D<audio src="" className="clip" id="d" /></button>
                </div>
                <div className="w-100"></div>
                <div className="col-sm-1" id="z">
                    <button type="button" className="drum-pad btn btn-dark" onClick={(e) => playSound(Z)}>Z<audio src="" className="clip" id="z" /></button>
                </div>
                <div className="col-sm-1" id="x">
                    <button type="button" className="drum-pad btn btn-dark" onClick={(e) => playSound(X)}>X<audio src="" className="clip" id="x" /></button>
                </div>
                <div className="col-sm-1" id="c">
                    <button type="button" className="drum-pad btn btn-dark" onClick={(e) => playSound(C)}>C<audio src="" className="clip" id="c" /></button>
                </div>
            </div>
        )
    }
}
export default Kit;