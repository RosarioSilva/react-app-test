import React from 'react';
import classes from './Cockpit.module.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) =>{
    const assignedClasses =[];
    let btnClass = classes.Button;
    
    if(props.showPersons){
      //btnClass = classes.Red;
      btnClass = [classes.Button, classes.Red].join( ' ' );
    }

    if(props.persons.length <= 2)
    {
      //classes.push('red');
      assignedClasses.push(classes.red)
    }
    if(props.persons.length <= 1)
    {
      assignedClasses.push(classes.bold);
    }
    /*return(
    <div className={classes.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className= {assignedClasses.join(' ')}>This is really working!</p>
        <button 
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
    )*/
    return (
      <Aux>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join( ' ' )}>This is really working!</p>
        <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>
      </Aux>
    );
};
export default cockpit;