import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Finnian Rhapsody</h1>
        </header>
        <p className="App-intro">
          Oh <strong>Time</strong>, Thou must untangle this, not I <br />For 'tis too hard a knot for <strong>me</strong> t'untie.
        </p>
      </div>
    );
  }
}

export default App;
