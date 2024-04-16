import React, { useState, useEffect } from "react";
import * as userClient from "./client"

export type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: string;
};
export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const getUsers = async () => {
    const users = await userClient.getUsers();
    setUsers(users);
  };
  const addUser = async () => {
    const newUser = await userClient.createUser(user);
    setUsers([...users, newUser]);
  };
  const updateUser = async () => {
    await userClient.updateUser(user);
    setUsers(users.map((u) => (u._id === user._id ? user : u)));
  };
  const deleteUser = async (user: User) => {
    await userClient.deleteUser(user._id);
    setUsers(users.filter((u) => u._id !== user._id));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>User Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="password"
                className="form-control w-50 float-end"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <input
                type="text"
                className="form-control w-50"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </th>
            <th>
              <input
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
                value={user.firstName}
              />
            </th>
            <th>
              <input
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                value={user.lastName}
              />
            </th>
            <th>
              <select
                onChange={(e) => setUser({ ...user, role: e.target.value })}
                value={user.role}
                className="form-control"
              >
                <option value="ADMIN">Admin</option>
                <option value="STUDENT">Student</option>
                <option value="FACULTY">Faculty</option>
              </select>
            </th>
            <th>
              <button onClick={addUser}>Add</button>
              <button onClick={updateUser}>Update</button>
            </th>
          </tr>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => setUser(user)}>Edit</button>
                <button onClick={() => deleteUser(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}