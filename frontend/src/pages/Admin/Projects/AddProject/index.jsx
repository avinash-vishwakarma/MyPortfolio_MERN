import React from "react";
import classes from "./AddProject.module.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { useEffect } from "react";
const AddProject = () => {
  const navigate = useNavigate();
  const { data, error, isLoading, request } = useFetch();
  const addProjectSubmitHandler = async (element) => {
    element.preventDefault();
    const Formdata = new FormData(element.target);
    request("/api/admin/add-new-project", {
      method: "POST",
      header: {
        "Content-Type": "multipart/form-data",
      },
      body: Formdata,
    });
  };

  useEffect(() => {
    console.log("i am running");
    if (data && data.status === "ok") {
      navigate("/admin/projects", {
        replace: true,
      });
    }
  }, [data, navigate]);

  return (
    <form className={classes.tempForm} onSubmit={addProjectSubmitHandler}>
      <input type="text" name="title" placeholder="enter title" />
      <textarea
        name="shortDesc"
        cols="30"
        rows="10"
        placeholder="short description"
      ></textarea>
      <input
        type="file"
        name="projectimage"
        accept="image/png , image/jpg , image/jpeg"
      />

      {isLoading && <p>Creating Project....</p>}
      {error && <p>sorry someting went wrong while adding project</p>}

      <button type="submit">add project</button>
    </form>
  );
};

export default AddProject;
