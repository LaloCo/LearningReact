import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // while props are set from outside
  // state is managed from inside the component
  state = {
    persons: [
      { name: 'Eduardo', age: 26 },
      { name: 'Yesenia', age: 26 },
      { name: 'Marty', age: 60 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!!!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >Some extra information about me.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
