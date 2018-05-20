import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './styles.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';
import Projects from '../components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} /> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
