import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import classes from "./allProjects.module.css";
const Projects = () => {
  const { data, error, isLoading, request } = useFetch();

  useEffect(() => {
    request("/api/get-all-project");
  }, [request]);

  return (
    <>
      {isLoading && "loading..."}
      {error && "error..."}
      {data &&
        data.payload.map((project) => {
          return (
            <div className={classes.projectBox} key={project._id}>
              <p>{project.title}</p>
              <p>{project.shortDesc}</p>
            </div>
          );
        })}
    </>
  );
};

export default Projects;
