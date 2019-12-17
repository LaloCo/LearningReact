import React, { useState } from 'react'; // useState is a hook, all hooks start with 'use'
import './App.css';
import Person from './Person/Person';

const app = props => {
  // personsState now works as state (without the this keyword)
  // setPersonsState is the function that can be called to update personsState
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Eduardo', age: 26 },
      { name: 'Yesenia', age: 26 },
      { name: 'Marty', age: 60 }
    ]
  });

  const [ otherState, setOtherState ] = useState({
    otherState: 'something something'
  });

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // by using arrow functions (ES6 syntax), the 'this' keyword
    // actually refers to the class (App in this case)
    // contrary to defining this as a normal function (ES5)
    
    // DON'T DO THIS: personsState.persons[0].name = "Eduardo Rosas";

    // with React Hooks, this does not merge this new state with the old one
    // as it happened with class-based Components, it overrides everything
    setPersonsState({
      persons: [
        { name: 'Eduardo Rosas', age: 26 },
        { name: 'Yesenia López', age: 26 },
        { name: newName, age: 60 }
      ],
      showPersons: false
    })
  }

  const togglePersonsHandler = () => {

  }

  const nameChangeHandler = event => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: 26 },
        { name: 'Yesenia López', age: 26 },
        { name: 'Marty', age: 60 }
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working!!!</p>
      <button style={style}
              onClick={togglePersonsHandler}>Switch Name</button>
      { this.StaticRange.showPersons ?
        <div>
          <Person name={personsState.persons[0].name}
                  age={personsState.persons[0].age}
                  changed={nameChangeHandler} />
          <Person name={personsState.persons[1].name}
                  age={personsState.persons[1].age}
                  click={switchNameHandler.bind(this, 'Marty Cagan')} >
                  Some extra information about me.
          </Person>
          <Person name={personsState.persons[2].name}
                  age={personsState.persons[2].age} />
        </div> : null
      }
    </div>
  );
}

export default app;
