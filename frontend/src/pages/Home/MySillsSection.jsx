import React from "react";
import classes from "./sectionStyle.module.css";
import SectionTitle from "../../components/ui/SectionTitle";
import Container from "../../components/ui/Container";
import SingleSkillBox from "../../components/ui/SingleSkillBox";

const MySillsSection = () => {
  return (
    <div className={classes.big_section}>
      <Container>
        <SectionTitle Title="My Sills" type="light">
          its just tip of the ice burg
        </SectionTitle>
        <div className={classes.skillBoxContainer}>
          <SingleSkillBox
            icon="akar-icons:html-fill"
            title="Html & Css"
            level="intermediate"
          />

          <SingleSkillBox
            icon="fluent:javascript-20-regular"
            title="Javascript"
            level="advance"
          />

          <SingleSkillBox
            icon="akar-icons:react-fill"
            title="React Js"
            level="intermediate"
          />

          <SingleSkillBox
            icon="fa-brands:node-js"
            title="Nodejs and Express js"
            level="advance"
          />

          <SingleSkillBox
            icon="bxl:mongodb"
            title="Mongo DB with Mongoose"
            level="advance"
          />

          <SingleSkillBox
            icon="cib:laravel"
            title="Laravel with MySql"
            level="advance"
          />

          <SingleSkillBox
            icon="carbon:data-vis-1"
            title="Data structure and algorithm"
            level="intermediate"
          />

          <SingleSkillBox
            icon="akar-icons:figma-fill"
            title="Figma Designing"
            level="intermediate"
          />
        </div>
      </Container>
    </div>
  );
};

export default MySillsSection;
