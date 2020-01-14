import React, { useState } from 'react'; // useState is a hook, all hooks start with 'use'
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

const app = props => {
  // personsState now works as state (without the this keyword)
  // setPersonsState is the function that can be called to update personsState
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { id: 'nf.kdj', name: 'Eduardo', age: 26 },
      { id: 'nfgjkr.', name: 'Yesenia', age: 26 },
      { id: 'lkrjewg', name: 'Marty', age: 60 }
    ]
  });

  const [ showPersonsState, setShowPersonsState ] = useState({
    showPersons: false
  });

  console.log(personsState, showPersonsState);

  const togglePersonsHandler = () => {
    const doesShow = showPersonsState.showPersons;
    setShowPersonsState({showPersons: !doesShow});
  }

  const nameChangedHandler = ( event, id ) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    // using the spread operator to spread all of the properties
    // from the object into a new object so that we don't mutate
    // the original object
    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    // also using the spread operator to get all the elements
    // from an array in a new (different) array for same
    // immutable properties
    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({persons: persons}); 
  }

  const deletePersonHandler = personIndex => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({persons: persons});
  }

  let persons = null;

  if (showPersonsState.showPersons) {
    persons = <Persons persons={personsState.persons}
                 clicked={deletePersonHandler}
                 changed={nameChangedHandler}/>
  }

  return (
    <div className={cssClasses.App}>
      <Cockpit persons={personsState.persons}
               showPersons={showPersonsState.showPersons}
               clicked={togglePersonsHandler}/>
      {persons}
    </div>
  );
}

export default app;
