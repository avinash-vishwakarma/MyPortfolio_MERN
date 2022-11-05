import React from "react";
import classes from "./SocialMediaIcons.module.css";
import SocialMediaIconLink from "./SocialMediaIconLink";

const SocialMediaIcons = () => {
  return (
    <ul className={classes.social__LinkContainer}>
      <SocialMediaIconLink icon="ant-design:facebook-filled"></SocialMediaIconLink>
      <SocialMediaIconLink icon="fa-brands:instagram-square"></SocialMediaIconLink>
      <SocialMediaIconLink icon="akar-icons:linkedin-box-fill"></SocialMediaIconLink>
      <SocialMediaIconLink icon="ant-design:twitter-square-filled"></SocialMediaIconLink>
      <SocialMediaIconLink icon="fa-brands:youtube-square"></SocialMediaIconLink>
    </ul>
  );
};

export default SocialMediaIcons;
