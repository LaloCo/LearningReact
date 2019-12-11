import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!!!</p>
        <Person name="Eduardo" age="26" />
        <Person name="Yesenia" age="26" >Some extra information about me.</Person>
        <Person name="Marty" age="60" />
      </div>
    );
  }
}

export default App;
