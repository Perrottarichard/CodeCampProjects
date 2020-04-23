import React, { Component } from "react";

class BreakControl extends Component {
  render() {
    return (
      <div className="col" id="break-control">
        <h2>Break</h2>
        <h3>{this.props.time}</h3>
      </div>
    );
  }
}

export default BreakControl;
