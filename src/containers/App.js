import React, { Component } from 'react'; // useState is a hook, all hooks start with 'use'
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  
  // this is a more modern JS syntax to define state
  // which behind the scences ads this to the constructor
  // to set this.state
  state = {
    persons: [
      { id: 'nf.kdj', name: 'Eduardo', age: 26 },
      { id: 'nfgjkr.', name: 'Yesenia', age: 26 },
      { id: 'lkrjewg', name: 'Marty', age: 60 }
    ],
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // using the spread operator to spread all of the properties
    // from the object into a new object so that we don't mutate
    // the original object
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    // also using the spread operator to get all the elements
    // from an array in a new (different) array for same
    // immutable properties
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons}); 
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}/>
    }

    return (
      <div className={cssClasses.App}>
        <Cockpit persons={this.state.persons}
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
}

export default App;
