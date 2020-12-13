import Head from "next/head";
import Layout from "../layout/layout";
import classes from "../styles/Home.module.scss";
import Image from "next/image";
import Button from "@material-ui/core/Button";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Grand Skin Care Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.root}>
        <div className={classes.image_container}>
          <Image
            src="/Images/hero.png"
            alt="Hero Image"
            className={classes.image}
            width="600px"
            height="600px"
          />
        </div>
        <div className={classes.content_container}>
          <div className={classes.header_container}>
            <p>Your Source of</p>
            <p>
              Beauty <span id={classes.primary_color}>& Health.</span>
            </p>
          </div>
          <div className={classes.content_text_container}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis nesciunt vel a possimus quas nulla. Maxime hic
              inventore voluptas dolore accusantium, sint recusandae alias
              repudiandae! Dicta magnam quasi nam ipsa similique alias quia
              nulla, at rerum nemo assumenda. Laboriosam, deserunt!
            </p>
          </div>
          <div className={classes.button_container}>
            <Button variant="contained" color="default">
              Learn More
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
