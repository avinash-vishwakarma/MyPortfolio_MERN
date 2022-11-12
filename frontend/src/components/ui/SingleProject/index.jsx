import React from "react";
import classes from "./SingleProject.module.css";
import TempImage from "../../../assets/img/longwebsiteImage.jpg";
import { DarkButton } from "../Button";
import { Icon } from "@iconify/react";

const SingeProject = ({ title, shortDesc, img }) => {
  return (
    <>
      <div className={classes.imageContainer}>
        <img src={`http://localhost:5000/${img}`} alt="nothing found" />
      </div>
      <strong className={classes.projectTitle}>{title}</strong>
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
