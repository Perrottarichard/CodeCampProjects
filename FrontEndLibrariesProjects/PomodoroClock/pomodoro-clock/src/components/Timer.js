import React, { Component } from "react";
import { connect } from "react-redux";
import { START, STOP, STATUS_INDICATOR, RESET } from "../actions/types";
import store from "../store";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      startTime: this.props.sessLength * 60 * 1000,
      breakTime: this.props.breakLength * 60 * 1000,
      isRunning: this.props.isRunning,
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (
      props.sessLength !== state.startTime &&
      props.statusMessage === "Stopped"
    ) {
      return {
        startTime: props.sessLength * 1000 * 60,
      };
    } else return null;
  }
  static getDerivedStateFromProps(props, state) {
    if (
      props.breakLength !== state.breakTime &&
      props.statusMessage === "Stopped"
    ) {
      return {
        breakTime: props.breakLength * 1000 * 60,
      };
    } else return null;
  }
  render() {
    return (
      <div className="col" id="timer">
        <h2>Timer</h2>
        <h4>{this.props.statusMessage}</h4>
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
        <button id="reset" onClick={() => this.reset()}>
          Reset
        </button>
      </div>
    );
  }
  startTimer = () => {
    store.dispatch({ type: START });
    store.dispatch({ type: STATUS_INDICATOR });
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
    store.dispatch({ type: STATUS_INDICATOR });
    clearInterval(this.interval);
  };
  reset = () => {
    console.log("reset");
    clearInterval(this.interval);
    store.dispatch({ type: RESET });
    this.setState({
      startTime: 25 * 1000 * 60,
      isRunning: this.props.isRunning,
    });
    console.log(this.props.sessLength);
  };
  formatTime = (time) => {
    let displayMin = Math.floor(time / 1000 / 60);
    let displaySec = time % 60;
    if (displaySec < 10) {
      displaySec = `0${displaySec}`;
    }
    return `${displayMin}:${displaySec}`;
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
