import React, { useEffect } from "react";
import Layout from "../../layouts";
import useFetch from "../../hooks/useFetch";
import classes from "./myProjects.module.css";
import Container from "../../components/ui/Container";
import tempimage from "../../assets/img/longwebsiteImage.jpg";
import { LinkDarkButton } from "../../components/ui/Button";
import { Icon } from "@iconify/react";

const MyProject = () => {
  const { data, isLoading, error, request } = useFetch();

  useEffect(() => {
    console.log("request send to server");
    request("/api/get-all-project");
  }, [request]);

  return (
    <Layout>
      <section className={classes.MyprojectSection}>
        <Container className={classes.projectCardContainer}>
          {data &&
            data.payload.map((project) => (
              <div className={classes.CardContainer} key={project._id}>
                <div className={classes.cardImageContainer}>
                  <img src={`http://localhost:5000/${project.img}`} />
                </div>

                <div className={classes.cardDataContainer}>
                  <h4>{project.title}</h4>
                  <p>{project.shortDesc}</p>

                  <LinkDarkButton to={"/"}>
                    <Icon icon="fluent-mdl2:git-hub-logo" /> git hub
                  </LinkDarkButton>
                </div>
              </div>
            ))}
        </Container>
      </section>
    </Layout>
  );
};

export default MyProject;
