import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';
//import Radium, {StyleRoot} from 'radium';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
class App extends Component{
  state = {
    persons: [
      {id:'qwert', name:'Max', age:28},
      {id:'qwerty', name:'Manu', age:29},
      {id:'qwertyu', name:'Stephanie', age:27}
    ],
    otherState:'some other value',
    showPersons: false
  }
  /*switchNameHandler = () =>{
    //console.log('Was clicked!');
    //DON´T DO THIS: this.state.persons[0].name = 'Maximillian'
    this.setState(
      {
        persons: [
          {name:'Maximillian', age:28},
          {name:'Manu', age:29},
          {name:'Stephanie', age:32}
        ]
      }
    )
  }*/

  switchNameHandler = (newName) =>{
    //console.log('Was clicked!');
    //DON´T DO THIS: this.state.persons[0].name = 'Maximillian'
    this.setState(
      {
        persons: [
          {name: newName, age:28},
          {name:'Manu', age:29},
          {name:'Stephanie', age:32}
        ]
      }
    )
  }
  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      /*persons: [
        {name: 'Max', age:28},
        {name:event.target.value, age:29},
        {name:'Stephanie', age:26}
      ]*/
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons;
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

//<button onClick={this.switchNameHandler}>Switch Name</button>
//<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
  render(){
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      /*,
      ':hover': {backgroundColor: 'lightgreen',
      color: 'black'
    }*/
    };
    let persons = null;
    if(this.state.showPersons)
    {
      /*persons = (
        <div>
        <Person name={this.state.persons[0].name} age= {this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,'Max2!')}
        changed={this.nameChangeHandler}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
      );*/
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      /*style[':hover']= {backgroundColor: 'salmon',
      color: 'black'
      }*/
    }
    const classes =[];
    if(this.state.persons.length <= 2)
    {
      classes.push('red');
    }
    if(this.state.persons.length <= 1)
    {
      classes.push('bold');
    }
    /*return(
      <StyleRoot>
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className= {classes.join(' ')}>This is really working!</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
       {persons}
      </div>
      </StyleRoot>
    );*/
    return(
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className= {classes.join(' ')}>This is really working!</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
       {persons}
      </div>
    );
  }
}

export default App;
