import * as React from "react";

export default function Card() {
  return (
    <React.Fragment>
      <div className="card-container">
        <div className="user-data-top">
          <p className="user-name">Thomas Erdmenger</p>
          <p className="user-handle">@thomaserdmenger</p>
        </div>
        <div className="user-data-middle">
          <p className="user-street">Zinksgartenstraße 13</p>
          <p className="user-city">06108 Halle</p>
        </div>
        <div>
          <p className="user-phone">Phone: 0151 ...</p>
          <p className="user-website">Website: www.google.de</p>
        </div>
      </div>
      <div className="buttons">
        <button type="text">Prev</button>
        <button type="text">Next</button>
      </div>
    </React.Fragment>
  );
}
