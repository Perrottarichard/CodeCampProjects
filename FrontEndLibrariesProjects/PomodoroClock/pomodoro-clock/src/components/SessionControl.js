import React, { Component } from "react";

class SessionControl extends Component {
  render() {
    return (
      <div className="col" id="session-control">
        <h2>Session</h2>
        <h3>{this.props.time}</h3>
      </div>
    );
  }
}

export default SessionControl;
