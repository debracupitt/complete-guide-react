import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    //   toggleBtnRef.current.click();
    // }, 2000);

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

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
    description = "There's not many people left...";
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
    description = "There's only one person left!";
  }

  if (props.personsLength <= 0) {
    assignedClasses.push(classes.darkred);
    description = "THERE'S NO ONE LEFT!";
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>{description}</p>
      <button onClick={props.login}>Log in</button>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Show/Hide Names
      </button>
    </div>
  );
};

export default React.memo(cockpit);
