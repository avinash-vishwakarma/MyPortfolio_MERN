import React from "react";
import Container from "../../components/ui/Container";
import classes from "./sectionStyle.module.css";
import SectionTitle from "../../components/ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import upsideDownCurve from "../../assets/svgs/First_Section_botttom_curve.svg";

import SingeProject from "../../components/ui/SingleProject";

const MyProjectSection = () => {
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
            <SwiperSlide>
              <SingeProject />
            </SwiperSlide>

            <SwiperSlide>
              <SingeProject />
            </SwiperSlide>

            <SwiperSlide>
              <SingeProject />
            </SwiperSlide>

            <SwiperSlide>
              <SingeProject />
            </SwiperSlide>

            <SwiperSlide>
              <SingeProject />
            </SwiperSlide>

            <SwiperSlide>
              <SingeProject />
            </SwiperSlide>
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
