import React from "react";
import classes from "./index.module.css";
import Container from "../../components/ui/Container";
import FooterSction from "./FooterSection";
import FullLogo from "../../assets/svgs/FullLogo.svg";
import SocialMediaIcons from "./SocialMediaIcons";
import { Icon } from "@iconify/react";

const FooterTitle = ({ children }) => {
  return <h6 className={classes.footer__title}>{children}</h6>;
};

const FooterLinks = ({ children }) => {
  return (
    <li>
      <a href="/">{children}</a>
    </li>
  );
};

const Footer = ({ children }) => {
  return (
    <footer className={`${classes.footer__container} bg-dark`}>
      <Container className={classes.footer__flex}>
        <FooterSction>
          <img src={FullLogo} alt="" />
          <p className={classes.hero_text}>
            Hello My name is avinash vishwakarma feel free to contact me for
            project and jobs of any kind Thanks for visiting
          </p>
          <SocialMediaIcons />
        </FooterSction>

        <FooterSction>
          <FooterTitle>Important Links</FooterTitle>
          <ul className={classes.footer__linkContainer}>
            <FooterLinks>- Home</FooterLinks>
            <FooterLinks>- About Me</FooterLinks>
            <FooterLinks>- Contact Me</FooterLinks>
            <FooterLinks>- Projects</FooterLinks>
            <FooterLinks>- Blog</FooterLinks>
          </ul>
        </FooterSction>

        <FooterSction>
          <FooterTitle>Contact Information</FooterTitle>
          <ul className={classes.footer__linkContainer}>
            <FooterLinks>
              <Icon icon="eva:phone-call-fill" /> +91 7000789511{" "}
            </FooterLinks>
            <FooterLinks>
              <Icon icon="eva:email-outline" />{" "}
              avinashvishwakarma.code@gmail.com
            </FooterLinks>
          </ul>
        </FooterSction>
      </Container>
    </footer>
  );
};

export default Footer;
