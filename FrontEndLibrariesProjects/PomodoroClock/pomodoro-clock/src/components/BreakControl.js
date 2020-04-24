import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import { BREAK_INC, BREAK_DEC } from "../actions/types";

class BreakControl extends Component {
  render() {
    return (
      <div className="col" id="break-control">
        <h2>Break Length</h2>
        <h3>{this.props.breakLength} minutes</h3>
        <button onClick={() => store.dispatch({ type: BREAK_INC })}>
          Increment
        </button>
        <button onClick={() => store.dispatch({ type: BREAK_DEC })}>
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
    timeRemaining: state.timeRemaining,
    statusMessage: state.statusMessage,
  };
};
export default connect(mapStateToProps)(BreakControl);
