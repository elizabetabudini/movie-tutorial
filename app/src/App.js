import React, { Component } from 'react';
import logo from './logo192.png';
import './App.css';
import MoviesList from './MoviesList';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
  Link,
} from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path='/' component={MoviesList} />
        <Route path='/:idIMDB' component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;
const Test = ({match}) => (
  <h1>{match.params.idIMDB}</h1>
)