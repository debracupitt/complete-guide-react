import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: "kljsdf", name: "Deb", age: 27 },
      { id: "yernfj", name: "Tim", age: 28 },
      { id: "mvkshd", name: "Claire", age: 61 }
    ],
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = classes.pink;
    }

    const assignedClasses = [];

    let description = "There's lots of people here.";

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
      description = "There's not many people left...";
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
      description = "There's only one person left!";
    }

    if (this.state.persons.length <= 0) {
      assignedClasses.push(classes.darkred);
      description = "THERE'S NO ONE LEFT!";
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm Deb's React App</h1>
        <p className={assignedClasses.join(" ")}>{description}</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
          Show/Hide Names
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
