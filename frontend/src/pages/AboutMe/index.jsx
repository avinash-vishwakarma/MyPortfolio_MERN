import React from "react";
import Container from "../../components/ui/Container";
import Layout from "../../layouts";
import classes from "./AboutMe.module.css";
import aboutImage from "../../assets/img/avinash_about_img.png";
import { Icon } from "@iconify/react";

const AboutMe = () => {
  return (
    <Layout>
      <section className={classes.aboutMeSection}>
        <Container>
          <div className={classes.aboutMeContentContainer}>
            <img src={aboutImage} alt="Avinash Vishwakarma" />
            <div className={classes.aboutMeData}>
              <h1>
                Hi, I’m <span>Avinash Vishwakarma</span>
              </h1>
              <h3>A Self Taught Full Stack web developer</h3>

              <p>
                first of all hii to any one who is reading thankyou for visiting
                my website , i am a full stack web developer i have started my
                journey as a web developer from the first year of my collage the
                first stack that i have learned is laravel because it uses php
                and at that time the price of linux shared histing is all i can
                afford but from deep in my heart i love javascript as a
                progarmming language so i started learning javascript for both
                frontend as well as back end because it provides much more
                controll over the processing and data handeling
                <br />I have learned most of the things from free resourses like
                youtube , w3school , geeksforgeeks etc . one of my favourate
                youtube channel is{"  "}
                <a
                  href="https://www.youtube.com/c/Fireship"
                  rel="noreferrer"
                  target="_blank"
                >
                  Fireship.io ,
                </a>{" "}
                i like the 100sec video formate of this channel and one more
                honourable mention is{" "}
                <a
                  href="https://www.youtube.com/@CodeforCause"
                  rel="noreferrer"
                  target="_blank"
                >
                  Code For Cause
                </a>{" "}
                i think code for cause is one of the best channel for getting
                into opensourse programming
              </p>

              <div className={classes.MoreDetailsSection}>
                <div className={classes.LogoBox}>
                  <Icon icon="mdi:book-education" />
                </div>

                <div className={classes.personalDeatilsData}>
                  <h4>Academic Details</h4>
                  <ul>
                    <li>
                      <strong>College / University</strong>
                    </li>
                    <li>Chhattisgarh Swami Vivekanand Technical University</li>
                    <li>
                      <strong>Course / degree</strong>
                    </li>
                    <li>BE ( Computer Science )</li>
                  </ul>
                </div>
              </div>
              <div className={classes.MoreDetailsSection}>
                <div className={classes.LogoBox}>
                  <Icon icon="mdi:nintendo-game-boy" />
                </div>

                <div className={classes.personalDeatilsData}>
                  <h4>personal Hobbies</h4>
                  <ul>
                    <li>Singing</li>
                    <li>Graphic Designing</li>
                    <li>Reading Books</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default AboutMe;
