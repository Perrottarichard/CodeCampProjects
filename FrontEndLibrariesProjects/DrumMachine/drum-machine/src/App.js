import React, { Component } from 'react';
import './css/bootstrap.css';
import './custom.css'
import Kit from './Kit.js'

class App extends Component {
  render() {
    return (
      <div className="App" id="drum-machine" >
        <div className="container jumbotron" id="jumbotron">
          <h1>Drum Machine</h1>
          <Kit />
        </div>
      </div>
    );
  }
}
export default App;

