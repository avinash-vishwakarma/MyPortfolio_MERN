import React from "react";
import Layout from "../../layouts";
import classes from "./NotFound.module.css";
import notFoundSvg from "./notFoundSvgs.svg";

const NotFound = () => {
  return (
    <Layout>
      <section className={classes.notFoundSection}>
        <img src={notFoundSvg} alt="404 not found" />
        <h3>sorry page not found</h3>
      </section>
    </Layout>
  );
};

export default NotFound;
