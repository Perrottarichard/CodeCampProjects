import React, { Component } from "react";
import Timer from "./components/Timer";
import BreakControl from "./components/BreakControl";
import SessionControl from "./components/SessionControl";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App" id="outer-container">
        <h1>Pomodoro Clock</h1>
        <div className="row">
          <BreakControl time={this.props.breakLength} />
          <Timer time={this.props.timeRemaining} />
          <SessionControl time={this.props.sessLength} />
        </div>
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
export default connect(mapStateToProps)(App);
