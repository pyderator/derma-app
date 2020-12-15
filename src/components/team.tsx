import React from "react";
import Image from "next/image";

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CSS
import classes from "../styles/team.module.scss";

const Team = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 0,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1> Meet Our Team </h1>
        <span></span>
      </div>
      <Slider {...settings} className={classes.container}>
        <div>
          <div className={classes.content_container}>
            <div className={classes.image_container}>
              <Image src="/Images/doctor_1.jpg" height="150px" width="150px" />
            </div>
            <div className={classes.title_container}>
              <p>Dr. Suresh Prasad Bastola</p>
            </div>
            <div className={classes.details_container}>
              <p>MBBS, MPH, IOM,TU</p>
              <p>Senior General Physican</p>
              <p>NMC No: 1584</p>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.content_container}>
            <div className={classes.image_container}>
              <Image src="/Images/doctor_1.jpg" height="150px" width="150px" />
            </div>
            <div className={classes.title_container}>
              <p>Dr. Suresh Prasad Bastola</p>
            </div>
            <div className={classes.details_container}>
              <p>MBBS, MPH, IOM,TU</p>
              <p>Senior General Physican</p>
              <p>NMC No: 1584</p>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.content_container}>
            <div className={classes.image_container}>
              <Image src="/Images/doctor_1.jpg" height="150px" width="150px" />
            </div>
            <div className={classes.title_container}>
              <p>Dr. Suresh Prasad Bastola</p>
            </div>
            <div className={classes.details_container}>
              <p>MBBS, MPH, IOM,TU</p>
              <p>Senior General Physican</p>
              <p>NMC No: 1584</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Team;
