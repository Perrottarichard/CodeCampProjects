import React, { Component } from "react";
import { connect } from "react-redux";
import { START, STOP } from "../actions/types";
import store from "../store";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      startTime: this.props.timeLeft,
      isRunning: this.props.isRunning,
    };
  }

  render() {
    return (
      <div className="col" id="timer">
        <h2>Timer</h2>
        <h3>{this.formatTime(this.state.startTime)}</h3>
        {!this.props.isRunning ? (
          <button id="start_stop" onClick={() => this.startTimer()}>
            Start
          </button>
        ) : (
          <button id="start_stop" onClick={() => this.stopTimer()}>
            Stop
          </button>
        )}
      </div>
    );
  }
  startTimer = () => {
    store.dispatch({ type: START });
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        startTime: prevState.startTime - 1,
      }));
    }, 1000);
    console.log("started");
  };
  stopTimer = () => {
    console.log("stopped");
    store.dispatch({ type: STOP });
    clearInterval(this.interval);
  };
  formatTime = (time) => {
    let minutes = Math.floor(time / 1000);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };
}

const mapStateToProps = (state) => {
  return {
    sessLength: state.sessLength,
    breakLength: state.breakLength,
    incVal: state.incVal,
    decVal: state.decVal,
    isRunning: state.isRunning,
    timeLeft: state.timeLeft,
    statusMessage: state.statusMessage,
  };
};
export default connect(mapStateToProps)(Timer);
