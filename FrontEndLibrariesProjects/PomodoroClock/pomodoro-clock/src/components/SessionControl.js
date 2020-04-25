import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import { SESS_INC, SESS_DEC } from "../actions/types";

class SessionControl extends Component {
  render() {
    return (
      <div className="col" id="session-control">
        <h2 id="session-label">Session Length</h2>
        <h3 id="session-length">{this.props.sessLength} minutes</h3>
        <button
          id="session-increment"
          onClick={
            this.props.sessLength < 60
              ? () => store.dispatch({ type: SESS_INC })
              : console.log("to high to increment")
          }
        >
          Increment
        </button>
        <button
          id="session-decrement"
          onClick={
            this.props.sessLength > 1
              ? () => store.dispatch({ type: SESS_DEC })
              : console.log("to low to decrement")
          }
        >
          Decrement
        </button>
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
export default connect(mapStateToProps)(SessionControl);
