import React from 'react';
import classes from './Cockpit.module.css';
const cockpit = (props) => {

    const assignedStyles = [];
    let btnStyles = '';

    if(props.showPersons){
        btnStyles = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedStyles.push( classes.red ); // assignedStyles = ['red']
    }

    if ( props.persons.length <= 1 ) {
      assignedStyles.push( classes.bold ); // assignedStyles = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedStyles.join( ' ' )}>This is really working!</p>
            <button
            className={btnStyles}
            onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;