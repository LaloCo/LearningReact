import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {
    // It is not recommended to have this if we don't
    // have an initial state and we don't do anything
    // with the state inside the method
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot);
    }
    
    render() {
        console.log('[Persons.js] render');
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                        <Person name={person.name}
                            age={person.age}
                            click={() => this.props.clicked(index)}
                            changed={(event) => this.props.changed(event, person.id)}/>
                    </ErrorBoundary>
        });
    }
}

export default Persons;
