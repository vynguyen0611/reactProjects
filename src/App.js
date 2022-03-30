import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = (props) => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: userName, age: userAge , id: Math.random().toString()}];
    });
  };

  // Lifting
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
