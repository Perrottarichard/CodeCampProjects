import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import { SESS_INC, SESS_DEC } from "../actions/types";

class SessionControl extends Component {
  render() {
    return (
      <div className="col" id="session-control">
        <h2>Session</h2>
        <h3>{this.props.sessLength}</h3>
        <button onClick={() => store.dispatch({ type: SESS_INC })}>
          Increment
        </button>
        <button onClick={() => store.dispatch({ type: SESS_DEC })}>
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
