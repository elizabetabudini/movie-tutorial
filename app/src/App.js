import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    input: 'Hello'
  }

  updateInput = (event) => {
    this.setState(
      { input : event.target.value.trim()}
    )
  }

  submit = () => {
   //console.log(this.text.value)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h3>{this.state.input}</h3>
          <input type='text' onChange={this.updateInput} value={this.state.input}></input>
          <input type='text' ref={(input)=> this.text = input}></input>
          <button onClick={this.submit}>show value</button>
        </header>
      </div>
    );
  }
  
}

export default App;
