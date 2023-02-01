import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h4>The Nav</h4>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
