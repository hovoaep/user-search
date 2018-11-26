import React from "react";

export default function User({ name, id }) {
  return (
    <li className="list-group-item">
      {name}
      <a href={`user/${id}`}>
        <span className="icon">
          <img src="link.svg" alt="link to user" />
        </span>{" "}
      </a>
    </li>
  );
}
