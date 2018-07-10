import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/backend-routes">
            <li>Backend Routes</li>
          </Link>
          <Link to="/react-basics">
            <li>React Basics</li>
          </Link>
          <Link to="/redux-basics">
            <li>Redux Basics</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
