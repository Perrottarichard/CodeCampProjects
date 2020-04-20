import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTime: "00:00",
      sessionLength: "",
      breakLength: "",
      isRunning: false,
      statusIndicator: "Session",
    };
  }
  render() {
    return (
      <div className="col" id="timer">
        Timer
        <h3>{this.state.currentBreakLength}</h3>
      </div>
    );
  }
}

export default Timer;
