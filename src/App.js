import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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
    // const persons = this.state.persons.slice();
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
    const style = {
      backgroundColor: "#73eaba",
      font: "inherit",
      border: "1px solid black",
      padding: "8px",
      boxShadow: "0 2px 3px #ccc",
      cursor: "pointer",
      borderRadius: "10px"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                key={person.id}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "#ffc5da";
      style[":hover"] = {
        backgroundColor: "#ff6099",
        fontWeight: "bold"
      };
    }

    const classes = [];

    let description = "There's lots of people here.";

    if (this.state.persons.length <= 2) {
      classes.push("red");
      description = "There's not many people left...";
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
      description = "There's only one person left!";
    }

    if (this.state.persons.length <= 0) {
      classes.push("darkred");
      description = "THERE'S NO ONE LEFT!";
    }

    return (
      <div className="App">
        <h1>Hi, I'm Deb's React App</h1>
        <p className={classes.join(" ")}>{description}</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Show/Hide Names
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
