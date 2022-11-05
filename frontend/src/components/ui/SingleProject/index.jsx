import React from "react";
import classes from "./SingleProject.module.css";
import TempImage from "../../../assets/img/longwebsiteImage.jpg";
import { DarkButton } from "../Button";
import { Icon } from "@iconify/react";

const SingeProject = () => {
  return (
    <>
      <div className={classes.imageContainer}>
        <img src={TempImage} alt="" />
      </div>
      <strong className={classes.projectTitle}>
        Title of the project that your are ging....
      </strong>
      <p className={classes.projctShortDescription}>type of the projet </p>
      <div className={classes.projectButtonContainer}>
        <DarkButton>
          <Icon icon="carbon:blog" />
          learn more
        </DarkButton>
        <DarkButton>
          <Icon icon="akar-icons:github-fill" /> github{" "}
        </DarkButton>
      </div>
    </>
  );
};

export default SingeProject;
