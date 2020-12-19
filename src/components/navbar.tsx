import React, { useState } from "react";
import classes from "../styles/navbar.module.scss";
import Link from "next/link";

// MUI
import { SwipeableDrawer, IconButton } from "@material-ui/core";
import {
  AttachMoney,
  ContactMail,
  Menu,
  RoomService,
} from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root_container}>
      <nav className={classes.root}>
        <div className={classes.logo_container}>
          <Link href="/">
            <a className="logo">GSC</a>
          </Link>
        </div>
        <div className={classes.link_container}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about">Service</Link>
          <Link href="/about">Contact</Link>
        </div>
        <div className={classes.menu_container}>
          <IconButton aria-label="" onClick={() => setOpen(!open)}>
            <Menu
              fontSize="large"
              style={{ color: "#fff", fontSize: "4rem" }}
            />
          </IconButton>
          <SwipeableDrawer
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            style={{
              justifyContent: "center",
            }}
          >
            <div className={classes.mobile_link_container}>
              <Link href="/">
                <a>
                  <HomeIcon className={classes.icon} fontSize="large" /> Home
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <InfoIcon className={classes.icon} fontSize="large" /> About
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <RoomService className={classes.icon} fontSize="large" />
                  Service
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <ContactMail className={classes.icon} fontSize="large" />{" "}
                  Contact
                </a>
              </Link>
              <hr />
              <footer>
                <p>&copy; Grand Skin Care 2020-2021</p>
              </footer>
            </div>
          </SwipeableDrawer>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
