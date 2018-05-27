import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './styles.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';
import Projects from '../Projects';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
