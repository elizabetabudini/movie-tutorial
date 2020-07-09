import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

class App extends Component {
  state = {
    movies: [],
  }

  async componentDidMount(){
    try {
       const res = await fetch("https://www.myapifilms.com/imdb/top?token=de22ca05-8965-497b-b36e-9bf49c579aa2&format=json&data=1");
       const movies = await res.json();
       this.setState({
         movies: movies.data.movies
       })

    } catch(e) {
      console.log(e)
    }
  }
  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path='/test' component={Test} />
          {this.state.movies.map((movie, i)=> (
              <Movie key={i} movie={movie} desc={movie.simplePlot}/>
            )
          )}
        </div>
      </Router>
    );
  }
  
}

export default App;

const Test = () => (
  <h1>test</h1>
)
