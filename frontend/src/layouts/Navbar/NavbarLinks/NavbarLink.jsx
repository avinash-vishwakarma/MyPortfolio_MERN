import React, { isValidElement } from "react";
import classes from "./NavbarLink.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavbarLink = ({ children, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? classes.activeLink : classes.NavLink
        }
        end
      >
        {children}
      </NavLink>
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
