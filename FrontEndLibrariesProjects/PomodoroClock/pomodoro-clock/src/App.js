import React from "react";
import { Provider } from "react-redux";
import Timer from "./components/Timer";
import BreakControl from "./components/BreakControl";
import SessionControl from "./components/SessionControl";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App" id="outer-container">
        <h1>Pomodoro Clock</h1>
        <div className="row">
          <BreakControl />
          <Timer />
          <SessionControl />
        </div>
      </div>
    </Provider>
  );
}

export default App;
