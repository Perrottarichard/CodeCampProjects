import React, { Component } from "react";
import { connect } from "react-redux";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.timeLeft,
    };
  }
  render() {
    const formatTime = (time) => {
      let minutes = Math.floor(time / 1000);
      let seconds = time % 60;
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    };
    return <h3>{formatTime(this.props.timeLeft)}</h3>;
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

export default connect(mapStateToProps, null)(Countdown);
