import React, { Component } from "react";
import { connect } from "react-redux";
import {
  START,
  STOP,
  STATUS_INDICATOR,
  RESET,
  ALARM,
  STATE_SHIFT,
} from "../actions/types";
import store from "../store";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      startTime: this.props.sessLength * 60 * 1000,
      shiftTime: this.props.sessLength * 60,
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
        shiftTime: props.sessLength * 60,
      };
    }
    if (
      props.breakLength !== state.breakTime &&
      props.statusMessage === "Break Time"
    ) {
      return {
        breakTime: props.breakLength * 1000 * 60,
      };
    } else return null;
  }
  render() {
    return (
      <div className="col-4" id="timer">
        <p id="timer-label">{this.props.statusMessage}</p>
        <p id="time-left">{this.formatTime(this.state.startTime)}</p>

        {!this.props.isRunning ? (
          <button
            className="btn btn-success"
            id="start_stop"
            onClick={() => this.startTimer()}
          >
            Start
          </button>
        ) : (
          <button
            className="btn btn-danger"
            id="start_stop"
            style={{ backgroundColor: "red" }}
            onClick={() => this.stopTimer()}
          >
            Pause
          </button>
        )}
        <button
          className="btn btn-primary pull-right"
          id="reset"
          onClick={() => this.reset()}
        >
          Reset
        </button>
      </div>
    );
  }
  startTimer = () => {
    const alarm = new Audio(
      "https://media.jpkarlsven.com/audio/codepen/pomodoro-clock/stop.mp3"
    );
    alarm.play();
    store.dispatch({ type: START });
    store.dispatch({ type: STATUS_INDICATOR });
    this.interval = setInterval(() => {
      console.log(this.state.shiftTime);
      if (this.state.shiftTime === 0) {
        clearInterval(this.interval);
        this.shift();
        // store.dispatch({ type: ALARM });
        // store.dispatch({ type: STATE_SHIFT });
      } else
        this.setState((prevState) => ({
          startTime: prevState.startTime - 1,
          shiftTime: prevState.shiftTime - 1,
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
      startTime: this.props.sessLength * 1000 * 60,
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
  shift = () => {
    console.log("shift");
    store.dispatch({ type: ALARM });
    store.dispatch({ type: STATE_SHIFT });
    this.setState({
      startTime: this.props.breakLength * 60 * 1000,
      shiftTime: this.props.breakLength * 60,
    });
    this.interval = setInterval(() => {
      console.log(this.state.startTime);
      console.log(this.state.shiftTime);
      if (this.state.shiftTime === 0) {
        clearInterval(this.interval);
        store.dispatch({ type: ALARM });
        store.dispatch({ type: STATE_SHIFT });
        this.setState({
          startTime: this.props.sessLength * 60 * 1000,
          shiftTime: this.props.sessLength * 60,
          breakTime: this.props.breakLength * 60 * 1000,
          isRunning: this.props.isRunning,
        });
        this.startTimer();
      } else
        this.setState((prevState) => ({
          startTime: prevState.startTime - 1,
          shiftTime: prevState.shiftTime - 1,
        }));
    }, 1000);
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
