import React, { Component } from "react";

class SessionControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSessionLength: "25:00",
      currentSessionLength: "",
      increment: 0,
      decrement: 0,
    };
  }
  render() {
    return (
      <div className="col" id="session-control">
        Session
        <h3>
          {this.state.currentSessionLength !== ""
            ? this.state.currentSessionLength
            : this.state.defaultSessionLength}
        </h3>
      </div>
    );
  }
}

export default SessionControl;
