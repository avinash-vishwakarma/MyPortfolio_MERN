import React from "react";
import classes from "./FooterSection.module.css";

const FooterSection = ({ children }) => {
  return <div className={classes.FooterSectionContainer}>{children}</div>;
};

export default FooterSection;
