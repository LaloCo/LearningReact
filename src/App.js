import React, { useState } from 'react'; // useState is a hook, all hooks start with 'use'
import cssClasses from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

  const [ otherState, setOtherState ] = useState({
    otherState: 'something something'
  });

  const [ showPersonsState, setShowPersonsState ] = useState({
    showPersons: false
  });

  console.log(personsState, otherState);

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
  let btnClasses = [cssClasses.button];

  if (showPersonsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <ErrorBoundary key={person.id}>
                   <Person name={person.name}
                         age={person.age}
                         click={() => deletePersonHandler(index)}
                         changed={(event) => nameChangedHandler(event, person.id)}/>
                 </ErrorBoundary>
        })}
      </div>
    );

    btnClasses.push(cssClasses.destructive);
  }

  const paragraphClasses = [];
  if (personsState.persons.length <= 2) {
    paragraphClasses.push(cssClasses.red);
  }
  if (personsState.persons.length <= 1) {
    paragraphClasses.push(cssClasses.bold);
  }

  return (
    <div className={cssClasses.App}>
      <h1>Hi, I'm a React app</h1>
      <p className={paragraphClasses.join(' ')}>This is really working!!!</p>
      <button className={btnClasses.join(' ')} onClick={togglePersonsHandler}>
        {showPersonsState.showPersons ? "Hide persons" : "Show persons"}
      </button>
      {persons}
    </div>
  );
}

export default app;
