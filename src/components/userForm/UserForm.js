import React, { useState } from "react";
import UserList from "../userList/UserList";
import "./userForm.css";

const UserForm = () => {
  const initialstate = {
    username: "",
    age: "",
    email: "",
  };
  const [addUser, setAddUser] = useState(initialstate);
  const [query, setQuery] = useState("");

  const [userList, setUserList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const handleFormInput = (e) => {
    setAddUser({
      ...addUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    if (!addUser.username.length) {
      console.log("fil username");
    }
    if (!addUser.email.length) {
      console.log("fill email");
    }
    if (!addUser.age.length) {
      console.log("fill age");
    }

    if (addUser.username && addUser.age && addUser.email) {
      setUserList([...userList, addUser]);
      setFilteredList([...userList, addUser]);
      setAddUser(initialstate);
    }
  };

  const deleteUser = (id) => {
    const filteredData = userList.splice(id, 1);
    setFilteredList(filteredData);
  };

  const handleSearch = (e) => {
    const queryLower = e.target.value.toLowerCase();
    console.log(queryLower);
    const searchList = userList.filter(
      (item) =>
        item.username.toLowerCase().includes(queryLower) ||
        item.email.toLowerCase().includes(queryLower)
    );
    if (e.target.value.length) {
      setFilteredList(searchList);
    } else {
      setFilteredList(userList);
    }
    // console.log("SEARCH LIST", filteredList);
  };

  return (
    <div>
      <h1 className="todo-heading">Add New Users</h1>

      <div className="form-wrapper">
        <div>
          <div className="input-block">
            <label>
              Enter Name: &nbsp; &nbsp;
              <input
                className="input-el"
                type="text"
                name="username"
                value={addUser.username}
                onChange={(e) => handleFormInput(e)}
              />{" "}
            </label>
          </div>
          <div className="input-block">
            <label>
              Enter Email: &nbsp; &nbsp;
              <input
                className="input-el"
                type="text"
                name="email"
                value={addUser.email}
                onChange={(e) => handleFormInput(e)}
              />
            </label>
          </div>
          <div className="input-block">
            <label>
              Enter Age: &nbsp; &nbsp; &nbsp; &nbsp;
              <input
                className="input-el"
                type="text"
                name="age"
                value={addUser.age}
                onChange={(e) => handleFormInput(e)}
              />
            </label>
          </div>
        </div>
        <button
          onClick={(e) => {
            handleFormSubmit(e);
          }}
          className="submit-btn"
        >
          Submit
        </button>
        <div>
          <input
            className="search-users"
            type="text"
            value={query}
            placeholder={"Search Users"}
            onChange={(e) => {
              setQuery(e.target.value);
              handleSearch(e);
            }}
          />
        </div>
      </div>
      {/* showing the list here */}
      {/* <div className="show-users-wrapper">
        {userList &&
          userList.map((user, ind) => {
            return (
              <div key={ind}>
                <UserList user={user} index={ind} deleteUser={deleteUser} />{" "}
              </div>
            );
          })}
      </div>
      <br /> */}
      {filteredList.length ? (
        <div className="table-head-wrapper">
          <p className="table-head"> Name </p>
          <p className="table-head"> Email </p>
          <p className="table-head"> Age </p>
          <p className="table-head"> Action </p>
        </div>
      ) : (
        <h3> Please Add some Users</h3>
      )}

      <div className="show-users-wrapper">
        {filteredList &&
          filteredList.map((user, ind) => {
            return (
              <div key={ind}>
                <UserList user={user} index={ind} deleteUser={deleteUser} />{" "}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserForm;
