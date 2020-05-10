import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import { SESS_INC, SESS_DEC } from "../actions/types";

class SessionControl extends Component {
  render() {
    return (
      <div className="col-2" id="session-control">
        <p id="session-label">Session Length</p>
        {(this.props.sessLength === 1) ? <p id="session-length">{this.props.sessLength} minute</p> :
          <p id="session-length">{this.props.sessLength} minutes</p>}
        <button
          className="btn btn-dark"
          id="session-increment"
          onClick={
            this.props.sessLength < 60
              ? () => store.dispatch({ type: SESS_INC })
              : console.log("to high to increment")
          }
        >
          +
        </button>
        <button
          className="btn btn-dark"
          id="session-decrement"
          onClick={
            this.props.sessLength > 1
              ? () => store.dispatch({ type: SESS_DEC })
              : console.log("to low to decrement")
          }
        >
          -
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
