import React from "react";
import Container from "../../components/ui/Container";
import classes from "./sectionStyle.module.css";
import SectionTitle from "../../components/ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import upsideDownCurve from "../../assets/svgs/First_Section_botttom_curve.svg";

import SingeProject from "../../components/ui/SingleProject";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";

const MyProjectSection = () => {
  const { data, request } = useFetch();
  const [NumberOfSlide, SetNumberOfSlide] = useState(3.2);

  useEffect(() => {
    request("/api/get-all-project");
  }, [request]);

  const changeSlidePerView = () => {
    if (window.innerWidth <= 765) {
      if (window.innerWidth <= 550) {
        SetNumberOfSlide(1.1);
      } else {
        SetNumberOfSlide(2.3);
      }
    }

    if (window.innerWidth > 765) {
      SetNumberOfSlide(3.7);
    }
  };

  useEffect(() => {
    changeSlidePerView();
    window.addEventListener("resize", changeSlidePerView());
  }, []);

  return (
    <>
      <section className={`${classes.big_section} bg-dark`}>
        <Container>
          <SectionTitle Title="My Projects">
            Let me Show you some of my work of art
          </SectionTitle>

          <Swiper
            slidesPerView={NumberOfSlide}
            spaceBetween={30}
            className={classes.projectSwiper}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {data &&
              data.payload.map((project) => (
                <SwiperSlide className={classes.singleSlider} key={project._id}>
                  <SingeProject {...project} />
                </SwiperSlide>
              ))}
          </Swiper>
        </Container>
      </section>
      <div className={classes.upsideDownCurveHolder}>
        <img src={upsideDownCurve} alt="" />
      </div>
    </>
  );
};

export default MyProjectSection;
