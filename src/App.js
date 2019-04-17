import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Styled from 'styled-components';
import Photo from './components/Photo';
import PhotoList from './components/PhotoList';
import Navbar from './components/Navbar';

const NavDiv = Styled.div`
  /* margin: 0 0 2em 0; */
  /* z-index: 0; */
`;

const App = props => {
  // console.log('👋🏼', props);
  
  return (
    <Router>
      <NavDiv>
       <div className="nav-bar">
        <Navbar />
       </div>
      </NavDiv>
        <Switch>
          <Route path="/photos" component={PhotoList} />
          <Route path="/" component={Photo} />
        </Switch>
    </Router>
  );
};

export default App;
