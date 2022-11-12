import React from "react";
import { Icon } from "@iconify/react";

import Container from "../../components/ui/Container";
import { DarkButton } from "../../components/ui/Button";

import classes from "./sectionStyle.module.css";

import bottomCurve from "../../assets/svgs/First_Section_botttom_curve.svg";
import HeadProfileImage from "../../assets/svgs/head_profile_image.svg";
import LanguageLogoIcon from "../../assets/img/language_logo_icons.png";

const FirstSection = () => {
  return (
    <section className={classes.big_section}>
      <Container className={classes.hero_container}>
        <div className={classes.hero_content}>
          <h3>Hello.</h3>
          <h1 className="blue">i am avinash vishwakarma</h1>
          <h2 className="dark">Full Stack Web developer</h2>
          <p>
            I am a Self taught Developer Who is ready to learn any thing at any
            time call me now at 7000789511
          </p>
          <DarkButton>
            Hire me <Icon icon="akar-icons:person-check" />
          </DarkButton>
        </div>
        <div className={classes.hero_imageContainer}>
          <img
            src={LanguageLogoIcon}
            className={classes.HoveringLogos}
            alt=""
          />
          <img src={HeadProfileImage} alt="" />
        </div>
      </Container>
      <img src={bottomCurve} className={classes.bottomCurve} alt="" />
    </section>
  );
};

export default FirstSection;
