import React from "react";

const Avatar = ({ person }) => (
  <div className="np-photo">
    {person.photo ? <img src={person.photo} alt={person.name} /> : <span aria-hidden="true">{person.initials}</span>}
  </div>
);

export default Avatar;