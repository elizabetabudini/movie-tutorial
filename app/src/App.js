import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    id: 1,
    title: 'start wars'
  },
  {
    id: 2,
    title: 'spider man'
  },
  {
    id: 3,
    title: 'sherlock'
  },
];

class App extends Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map((movie, i)=> (
            <Movie key={i} movie={movie}/>
          )
        )}
      </div>
    );
  }
  
}

export default App;
