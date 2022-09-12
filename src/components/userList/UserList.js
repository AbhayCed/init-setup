import React, { useState } from "react";

const UserList = ({ user, index, deleteUser }) => {
  return (
    <div>
      <div>
        <span> Name : {user.username}</span> <span> Age {user.age}</span>{" "}
        <span onClick={(e) => deleteUser(index)}> X</span>
      </div>
    </div>
  );
};

export default UserList;
