import React from "react";
import Image from "next/image";
import classes from "../styles/services.module.scss";
const Services = () => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1>Our Services</h1>
        <span></span>
      </div>
      <div className={classes.root_container}>
        <div>
          <div>
            <div>
              <h3>Clinic Research</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                obcaecati quos dolorem reiciendis voluptatem consequuntur optio
                ut sint ab nihil.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3>Clinic Research</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                obcaecati quos dolorem reiciendis voluptatem consequuntur optio
                ut sint ab nihil.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3>Clinic Research</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                obcaecati quos dolorem reiciendis voluptatem consequuntur optio
                ut sint ab nihil.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.root_container_image}>
          {/* For the image */}
          <Image src="/Images/hero.png " height="650px" width="733px" />
        </div>
        <div className={classes.root_container_right}>
          <div>
            <div>
              <h3>Skin Protection</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                debitis quidem amet, aspernatur odit eos eius maiores rerum
                recusandae et?
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3>Solar Protection</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                debitis quidem amet, aspernatur odit eos eius maiores rerum
                recusandae et?
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3>Body Treatment</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                debitis quidem amet, aspernatur odit eos eius maiores rerum
                recusandae et?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
