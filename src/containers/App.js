import React, { PureComponent } from 'react';
import classes from './App.module.css';
//import Person from '../components/Persons/Person/Person';
//import Radium, {StyleRoot} from 'radium';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

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
//class App extends Component{
class App extends PureComponent{
  constructor( props ){
    super(props);
    console.log( '[App.js] Inside Constructor', props );
    this.state = {
      persons: [
        {id:'qwert', name:'Max', age:28},
        {id:'qwerty', name:'Manu', age:29},
        {id:'qwertyu', name:'Stephanie', age:27}
      ],
      otherState:'some other value',
      showPersons: false, 
      toggleClicked: 0, 
      authenticated: false
    };
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
  componentWillMount () {
    console.log( '[App.js] Inside componentWillMount()' );
  }

  componentDidMount () {
    console.log( '[App.js] Inside componentDidMount()' );
  }
  componentWillUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate () {
    console.log( '[UPDATE App.js] Inside componentDidUpdate' );
  }

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
    this.setState(  (prevState, props) =>{
        return {showPersons: !doesShow,
          toggleClicked: prevState.toggleClicked += 1
        }
        }
      );
  }

  loginHandler =()=> {
    this.setState({authenticated: true});
  }

 
//<button onClick={this.switchNameHandler}>Switch Name</button>
//<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
  render(){
    /*const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      ,
      ':hover': {backgroundColor: 'lightgreen',
      color: 'black'
    }
    };*/
    console.log( '[App.js] Inside render()' );
    let persons = null;
    //let btnClass = '';
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

          {this.state.persons.map((person,index) => {
            return <ErrorBoundary key={person.id}><Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            //key={person.id}
            changed={(event)=>this.nameChangeHandler(event, person.id)}/></ErrorBoundary>
          })}

      );*/ 
//isAuthenticated={this.state.authenticated}
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        />;
      //style.backgroundColor = 'red';
      /*style[':hover']= {backgroundColor: 'salmon',
      color: 'black'
      }*/
      
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
    /*return(
      <div className={classes.App}>
      <Cockpit showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonsHandler}/>
       {persons}
      </div>
    );*/

    return(
      <Aux>
       <button onClick={() => { this.setState( { showPersons: true } ) }}>Show Persons</button>
        <Cockpit 
        appTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        login={this.loginHandler}
        clicked={this.togglePersonsHandler}/>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
        
      </Aux>
    );

  }
}

export default withClass(App, classes.App);
