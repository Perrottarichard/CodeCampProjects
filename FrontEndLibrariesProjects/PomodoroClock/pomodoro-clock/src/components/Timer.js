import React, { Component } from "react";
class Timer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col" id="timer">
        <h2>Timer</h2>
        <h3>{this.props.time}</h3>
      </div>
    );
  }
}

export default Timer;
