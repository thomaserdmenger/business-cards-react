import * as React from "react";

export default function Card({ user }) {
  const { id, name, username, phone, email, website } = user;

  return (
    <React.Fragment>
      <div key={id} className="card-container">
        <div className="user-data-top">
          <p className="user-name">{name}</p>
          <p className="user-handle">{username}</p>
        </div>
        <div className="user-data-middle"></div>
        <div>
          <p className="user-phone">Phone: {phone}</p>
          <p className="user-phone">Email: {email}</p>
          <p className="user-website">Website: {website}</p>
        </div>
      </div>
      <div className="buttons">
        <button type="text">Prev</button>
        <button type="text">Next</button>
      </div>
    </React.Fragment>
  );
}
