import React from "react";
import classes from "../styles/footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.root}>
      <p>Copyright &copy; Grand Skin Care Center 2020-2021</p>
      <p>
        Developed by <a href="https://pyderator.me">Gaurav Jha</a>
      </p>
    </footer>
  );
};

export default Footer;
