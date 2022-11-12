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

const MyProjectSection = () => {
  const { data, error, isLoading, request } = useFetch();

  useEffect(() => {
    request("/api/get-all-project");
  }, [request]);

  return (
    <>
      <section className={`${classes.big_section} bg-dark`}>
        <Container>
          <SectionTitle Title="My Projects">
            Let me Show you some of my work of art
          </SectionTitle>

          <Swiper
            slidesPerView={3.2}
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
                <SwiperSlide key={project._id}>
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
