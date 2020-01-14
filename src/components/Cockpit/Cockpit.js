import React from 'react';
import cssClasses from './Cockpit.css';

const Cockpit = props => {
    const paragraphClasses = [];
    if (props.persons.length <= 2) {
        paragraphClasses.push(cssClasses.red);
    }
    if (props.persons.length <= 1) {
        paragraphClasses.push(cssClasses.bold);
    }
    
    let btnClasses = [cssClasses.button];
    if (props.showPersons) {
        btnClasses.push(cssClasses.destructive);
    }

    return (
        <div className={cssClasses.Cockpit}>
            <h1>Hi, I'm a React app</h1>
            <p className={paragraphClasses.join(' ')}>This is really working!!!</p>
            <button className={btnClasses.join(' ')} onClick={props.clicked}>
                {props.showPersons ? "Hide persons" : "Show persons"}
            </button>
        </div>
    );
};

export default Cockpit;
