import React from "react";
import classes from "./Button.module.css";

const Button = ({ onClick, type = "button", className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.Button} ${className} `}
    >
      {children}
    </button>
  );
};

export const DarkButton = ({
  onClick,
  type = "button",
  className,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.Dark_Button} ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
