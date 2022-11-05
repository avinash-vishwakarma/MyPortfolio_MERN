import React from "react";
import classes from "./NavbarLink.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarLink = ({ children, to }) => {
  return (
    <li>
      <Link to={to} className={classes.NavLink}>
        {children}
      </Link>
    </li>
  );
};

export const NavBarDropDowns = ({ title }) => {
  const [dropDown, setDropDown] = useState(false);

  const showDropDownHandler = (show) => {
    setDropDown(show);
  };

  return (
    <li
      onMouseOver={showDropDownHandler.bind(this, true)}
      onMouseLeave={showDropDownHandler.bind(this, false)}
    >
      <button className={classes.NavLink}>{title}</button>
      <ul
        className={`${classes.drowDownLinks} bg-dark ${
          dropDown && classes.showDropDown
        }`}
      >
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">signup</Link>
        </li>
      </ul>
    </li>
  );
};

export default NavbarLink;
