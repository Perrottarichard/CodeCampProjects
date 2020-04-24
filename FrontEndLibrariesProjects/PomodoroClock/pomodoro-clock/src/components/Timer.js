import React, { Component } from "react";
import { connect } from "react-redux";
import Countdown from "./Countdown";
import { START, STOP } from "../actions/types";
import store from "../store";
class Timer extends Component {
  render() {
    return (
      <div className="col" id="timer">
        <h2>Timer</h2>
        <Countdown />
        {!this.props.isRunning ? (
          <button
            id="start_stop"
            onClick={() => store.dispatch({ type: START })}
          >
            Start
          </button>
        ) : (
          <button
            id="start_stop"
            onClick={() => store.dispatch({ type: STOP })}
          >
            Stop
          </button>
        )}
      </div>
    );
  }
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
