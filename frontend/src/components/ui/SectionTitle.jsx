import React from "react";
import classes from "./SectionTitle.module.css";

const SectionTitle = ({ Title, children, type = "dark" }) => {
  return (
    <div
      className={`${type === "light" && classes.darkTitle} ${
        classes.titleContainer
      }`}
    >
      <h3>{Title}</h3>
      <div className={classes.borderBottom_container}>
        <div></div>
        <div></div>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default SectionTitle;
