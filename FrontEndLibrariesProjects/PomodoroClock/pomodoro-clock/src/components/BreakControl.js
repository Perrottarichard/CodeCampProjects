import React, { Component } from "react";

class BreakControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultBreakLength: "05:00",
      currentBreakLength: "",
      increment: 0,
      decrement: 0,
    };
  }
  render() {
    return (
      <div className="col" id="break-control">
        Break
        <h3>
          {this.state.currentBreakLength !== ""
            ? this.state.currentBreakLength
            : this.state.defaultBreakLength}
        </h3>
      </div>
    );
  }
}

export default BreakControl;
