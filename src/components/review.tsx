import React from "react";
import classes from "../styles/review.module.scss";

import Image from "next/image";

const Review = () => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1>Everyone Is Beautiful</h1>
        <span></span>
      </div>
      <div className={classes.container}>
        <div>
          <div className={classes.card}>
            <div className={classes.image_container}>
              <Image src="/Images/comm.png" height="190px" width="220px" />
            </div>
            <div className={classes.content_container}>
              <h1>Esther Howard</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                blanditiis officia ut repellendus! Vero accusantium dolorum quos
                ipsum quas ipsam?
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.image_container}>
              <Image src="/Images/comm.png" height="190px" width="220px" />
            </div>
            <div className={classes.content_container}>
              <h1>Esther Howard</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                blanditiis officia ut repellendus! Vero accusantium dolorum quos
                ipsum quas ipsam?
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.card}>
            <div className={classes.image_container}>
              <Image src="/Images/comm.png" height="190px" width="220px" />
            </div>
            <div className={classes.content_container}>
              <h1>Esther Howard</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                blanditiis officia ut repellendus! Vero accusantium dolorum quos
                ipsum quas ipsam?
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.image_container}>
              <Image src="/Images/comm.png" height="190px" width="220px" />
            </div>
            <div className={classes.content_container}>
              <h1>Esther Howard</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                blanditiis officia ut repellendus! Vero accusantium dolorum quos
                ipsum quas ipsam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
