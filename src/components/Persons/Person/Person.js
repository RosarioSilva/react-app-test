import React, {Component} from 'react';
import classes from './Person.module.css';
//import { classExpression } from '@babel/types';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
//import Radium from 'radium';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';

//const person = (props) => {
class Person extends Component{
    
    constructor ( props ){
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }
    /*const style = {
        '@media (mid-width:500px)':{
            width: '450px'
        }
    };
    return (<div className="Person" style={style}>
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )*/
    /*const rnd = Math.random();
    if(rnd > 0.7){
        throw new Error('Something went wrong');
    }*/
    componentDidMount () {
        console.log('[Person.js] Inside componentDidMount()');
        if(this.props.position === 0)
        {
            this.inputElement.current.focus();
        }
        
    }

    focus(){
        this.inputElement.current.focus();
    }

    //ref={(inp) => {this.inputElement = inp }}
    //{this.props.authenticated ? <p>I'm authenticated!</p>: null}
    render(){
    return  (
        <Aux>
            <AuthContext.Consumer>
            {auth => auth ? <p>I'm authenticated!</p>: null}
            </AuthContext.Consumer>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
        ref={this.inputElement }
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name}/>
        
        </Aux>
    )
    }

}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

//export default Radium(person);
export default withClass(Person,classes.Person);
//export default Person;

