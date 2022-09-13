import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./userlist.css";

const UserList = ({ user, index, deleteUser }) => {
  return (
    <div className="userlist-wrapper">
      <p className="userlist-data"> {user.username}</p>
      <p className="userlist-data"> {user.email}</p>
      <p className="userlist-data"> {user.age}</p>
      <p
        className="userlist-data"
        style={{ cursor: "pointer" }}
        onClick={(e) => deleteUser(index)}
      >
        {" "}
        <FaTimes size={"1em"} />
      </p>
    </div>
  );
};

export default UserList;
