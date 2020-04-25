import React, { Component } from "react";
import Timer from "./components/Timer";
import BreakControl from "./components/BreakControl";
import SessionControl from "./components/SessionControl";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" id="outer-container">
          <p id="head">Pomodoro Clock</p>
          <div className="row justify-content-center">
            <Timer />
          </div>
          <div className="row justify-content-center">
            <BreakControl />
            <SessionControl />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
