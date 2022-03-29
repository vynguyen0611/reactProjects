import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = (props) => {
  const [addedUser, setAddedUser] = useState("");

  const addUserHandler = (enteredText) => {
    setAddedUser((prevUsersList) => {
      const updatedUsersList = [...prevUsersList];
      updatedUsersList.unshift({
        text: enteredText,
        id: Math.random().toString(),
      });
      return updatedUsersList;
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={[{}]}/>
    </div>
  );
};

export default App;
