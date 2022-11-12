import React, { useEffect } from "react";
import Layout from "../../layouts";
import useFetch from "../../hooks/useFetch";
import classes from "./myProjects.module.css";

const MyProject = () => {
  const { data, isLoading, error, request } = useFetch();

  useEffect(() => {
    console.log("request send to server");
    request("/api/get-all-project");
  }, [request]);

  return (
    <Layout>
      <div className={classes.tempHoldingContainer}>
        {data &&
          data.payload.map((project) => (
            <div key={project._id} className={classes.tempProjectbox}>
              {project.title}
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default MyProject;
