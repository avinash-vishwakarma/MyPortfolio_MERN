import React from "react";
import { Icon } from "@iconify/react";

const SocialMediaIconLink = ({ path, icon }) => {
  return (
    <li>
      <a
        href={(path = "/")}
        style={{
          color: "inherit",
        }}
      >
        <Icon icon={icon} width="30px" height="30px" />
      </a>
    </li>
  );
};

export default SocialMediaIconLink;
