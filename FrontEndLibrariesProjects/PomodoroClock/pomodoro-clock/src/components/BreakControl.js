import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import { BREAK_INC, BREAK_DEC } from "../actions/types";

class BreakControl extends Component {
  render() {
    return (
      <div className="col-2" id="break-control">
        <p id="break-label">Break Length</p>
        <p id="break-length">{this.props.breakLength} minutes</p>
        <button
          className="btn btn-dark"
          id="break-increment"
          onClick={
            this.props.breakLength < 60
              ? () => store.dispatch({ type: BREAK_INC })
              : console.log("too high to increment")
          }
        >
          +
        </button>
        <button
          className="btn btn-dark"
          id="break-decrement"
          onClick={
            this.props.breakLength > 1
              ? () => store.dispatch({ type: BREAK_DEC })
              : console.log("too low to decrement")
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
    timeRemaining: state.timeRemaining,
    statusMessage: state.statusMessage,
  };
};
export default connect(mapStateToProps)(BreakControl);
