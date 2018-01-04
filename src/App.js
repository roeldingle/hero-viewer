import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderColumn from './components/HeaderColumn';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <HeaderColumn />
        </div>
        <div className="row">
          <h2>Content</h2>
        </div>
      </div>
    );
  }
}

export default App;
