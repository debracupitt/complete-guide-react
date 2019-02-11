import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

// Change the state using hooks. You must use a function. useState is the most important hook.
const app = () => {
  // useState returns an array with exactly 2 elements, and always 2 elements
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Deb", age: 27 },
      { name: "Tim", age: 28 },
      { name: "Claire", age: 61 }
    ],
    otherState: "some other value"
  });

  // When using hooks to set the state, the state does NOT merge with the old state (like it does with the class-based way of setting the state). Instead, it replaces the old state with it.
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Claire", age: 27 },
        { name: "Deb", age: 28 },
        { name: "Tim", age: 61 }
      ]
    });
  };

  return (
    // JSX: Syntax you can use to write HTML while actually writing JavaScript
    <div className="App">
      <h1>Hi, I'm Deb's React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        Here's some text
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;

// state = {
//   persons: [
//     { name: "Deb", age: 27 },
//     { name: "Tim", age: 28 },
//     { name: "Claire", age: 61 }
//   ]
// };
//
// switchNameHandler = i => {
//   // DON'T DO THIS: personsState.persons[0].name = personsState.persons[1].name;
//   // console.log("Was clicked!");
//   this.setState({
//     persons: [
//       { name: "Claire", age: 27 },
//       { name: "Deb", age: 28 },
//       { name: "Tim", age: 61 }
//     ]
//   });
// };
