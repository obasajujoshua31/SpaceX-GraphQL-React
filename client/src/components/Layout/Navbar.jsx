import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/rockets" className="nav-link" activeClassName="active">
            Rockets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/launches" className="nav-link" activeClassName="active">
            Launches
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/ships" className="nav-link" activeClassName="active">
            Ships
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
