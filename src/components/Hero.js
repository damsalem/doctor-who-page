import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    paddingTop: "55px",
    maxWidth: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgImage: {
    position: "relative",
    zIndex: 0,
    height: "auto",
    width: "100%",
  },
  title: {
    position: "absolute",
    zIndex: 2,
    color: "white",
    textTransform: "uppercase",
    fontSize: "48px",
  },
  headerImage: {
    width: "100%",
  },
}));

function Hero() {
  const classes = useStyles();
  const content = [
    {
      header: "Doctor Who",
      headerImage:
        "https://www.doctorwho.tv/brand/assets/images/logos/logo-dw-white.svg",
      image:
        "https://image.api.playstation.com/vulcan/img/rnd/202011/1610/HWy4UZSiok6NDrkq4QkYJcAB.png",
    },
  ];
  return (
    <>
      {content.map((item, i) => (
        <div key={i} className={classes.hero}>
          <img className={classes.imgImage} src={item.image} />
          <h1 className={classes.title}>
            <img className={classes.headerImage} src={item.headerImage} />
          </h1>
        </div>
      ))}
    </>
  );
}

export default Hero;
