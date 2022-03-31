import React, { useState, useRef } from "react";
import Button from "../../UI/Button/Button";
import classes from "./AddUser.module.css";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

const AddUser = (props) => {
  // This ref value being generated here always is an object, which always has a current prop and it holds the actual value
  // it's a real DOM node, so you can manipulate (dont recommend) or read data from input
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // const usernameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  // The only way of getting rid of error modal, is to reset {error} to undefined or to null or to any other falsy value
  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // state
    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //     title: "Invalid input",
    //     message: "Please enter a valid username and age.",
    //   });
    //   return;
    // }

    // if (+enteredAge < 1) {
    //   setError({
    //     title: "Invalid age",
    //     message: "Please enter a valid age (> 0).",
    //   });
    //   return;
    // }

    // ref
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age.",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    // state
    // props.onAddUser(enteredUsername, enteredAge);

    // ref
    props.onAddUser(enteredName, enteredUserAge);

    // ref - manipulting the DOM (rare case) to change user input
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    // state
    // setEnteredName("");
    // setEnteredAge("");
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // state
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // state
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
