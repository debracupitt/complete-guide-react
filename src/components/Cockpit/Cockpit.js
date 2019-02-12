import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup in useEffect");
    };
  }, []);

  const assignedClasses = [];
  let btnClass = "";
  let description = "There's lots of people here.";

  if (props.showPersons) {
    btnClass = classes.pink;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
    description = "There's not many people left...";
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
    description = "There's only one person left!";
  }

  if (props.persons.length <= 0) {
    assignedClasses.push(classes.darkred);
    description = "THERE'S NO ONE LEFT!";
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>{description}</p>
      <button className={btnClass} onClick={props.clicked}>
        Show/Hide Names
      </button>
    </div>
  );
};

export default cockpit;
