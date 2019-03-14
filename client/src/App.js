import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Register from './components/auth/Register';

import Navbar from './components/layouts/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/register" component={ Register } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
