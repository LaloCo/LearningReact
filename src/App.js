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
    ],
    otherState: 'something something'
  });

  console.log(personsState);

  const switchNameHandler = () => {
    // by using arrow functions (ES6 syntax), the 'this' keyword
    // actually refers to the class (App in this case)
    // contrary to defining this as a normal function (ES5)
    
    // DON'T DO THIS: personsState.persons[0].name = "Eduardo Rosas";

    // with React Hooks, this does not merge this new state with the old one
    // as it happened with class-based Components, it overrides everything
    setPersonsState({
      ...personsState,
      persons: [
        { name: 'Eduardo Rosas', age: 26 },
        { name: 'Yesenia López', age: 26 },
        { name: 'Marty Cagan', age: 60 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working!!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >Some extra information about me.</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;
