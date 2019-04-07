import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './components/Photo';
import PhotoList from './components/PhotoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hello from App.js
          </p>
          <Photo />
          <PhotoList />
        </header>
      </div>
    );
  }
}

export default App;
