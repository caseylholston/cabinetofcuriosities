import React from "react";
import { Link } from "react-router";
import Login from "../Login";

const Navbar = () => (
  <nav style={{ marginBottom: 0 }} className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Cabinet of Curiosities</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === "/" && "active"}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/species" && "active"}>
          <Link to="/species">Species Search</Link>
        </li>
        <li className={location.pathname === "/location" && "active"}>
          <Link to="/location">Location Search</Link>
        </li>
        <li className={location.pathname === "/favorites" && "active"}>
          <Link to="/account">My Account</Link>
        </li>
        <li className={location.pathname === "/favorites" && "active"}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
