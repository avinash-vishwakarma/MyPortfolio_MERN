import React from "react";
import classes from "./index.module.css";
import NavbarLink from "./NavbarLink";

const NavbarLinks = () => {
  return (
    <ul className={classes.NavbarLink_Container}>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/my-porjects">Projects</NavbarLink>
      <NavbarLink to="/about-me">About</NavbarLink>
      <NavbarLink to="/contact-me">Contact me</NavbarLink>
    </ul>
  );
};

export default NavbarLinks;
