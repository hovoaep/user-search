import React from "react";
import User from "./User";

export default function Users({ users, error }) {
  const usersList = !error ? (
    users.map(user => <User key={user.id} id={user.id} name={user.name} />)
  ) : (
    <li className="list-group-item alert alert-danger">No user</li>
  );
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <ul className="list-group">{usersList}</ul>
      </div>
    </div>
  );
}
