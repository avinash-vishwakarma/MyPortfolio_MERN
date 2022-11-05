import React from "react";

const Container = (props) => {
  return (
    <div
      className={`${props.className}`}
      style={{
        width: "80%",
        height: "100%",
        margin: "0 auto",
        border: "1px solid red",
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
