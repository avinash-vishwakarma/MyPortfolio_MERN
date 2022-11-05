import React from "react";
import classes from "./singleSkillBox.module.css";
import { Icon } from "@iconify/react";

const SingleSkillBox = (props) => {
  return (
    <div className={classes.skillContainer}>
      <div className={`${classes.skillLogoBox} bg-dark`}>
        <Icon icon={props.icon}></Icon>
      </div>
      <div className={classes.skillContentContainer}>
        <strong>{props.title}</strong>
        <div className={classes.levelbox}>
          <div className={`${classes[props.level]} bg-dark`}>{props.level}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleSkillBox;
