import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  wrap: {
    backgroundColor: "#101820",
    padding: "40px",
    minHeight: "70px",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  logo: {
    maxWidth: "150px",
  },
  copyright: {
    fontSize: "12px",
    paddingLeft: "40px",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <img
        className={classes.logo}
        src="https://www.doctorwho.tv/brand/assets/images/logos/logo-dw-white.svg"
      />
      <p className={classes.copyright}>
        Copyright <Year />
      </p>
    </div>
  );
}

function Year() {
  return new Date().getFullYear();
}

export default Footer;
