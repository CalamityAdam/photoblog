import React from 'react';
import './App.css';
import Photo from './components/Photo';
import PhotoList from './components/PhotoList';
import Navbar from './components/Navbar';

const App = props => {
  console.log('👋🏼', this.props);
  return (
    <div className="App">
      <Navbar />
      <Photo />
      <PhotoList />
    </div>
  );
};

export default App;
