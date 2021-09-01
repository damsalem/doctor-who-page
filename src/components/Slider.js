import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { SlideContext } from "../App";

const useStyles = makeStyles((theme) => ({
  slider: {
    paddingBottom: "40px",
  },
  slide: {
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    maxHeight: "568px",
    objectFit: "cover",
  },
  content: {
    height: "25%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  name: {
    textAlign: "center",
    fontWeight: "600",
  },
  quote: {
    fontSize: "18px",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      maxWidth: "60%",
      margin: "0 auto",
    },
  },
}));

function Slider() {
  const classes = useStyles();
  const slide = React.useContext(SlideContext);

  //images courtesy of https://www.bbc.co.uk/newsround/25004050
  const items = [
    {
      name: "First Doctor",
      image: "doctor-who-1.jpg",
      quote:
        "One day, I shall come back. Yes, I shall come back. Until then, there must be no regrets, no tears, no anxieties. Just go forward in all your beliefs, and prove to me that I am not mistaken in mine! Goodbye, Susan. Goodbye, my dear.",
    },
    {
      name: "Second Doctor",
      image: "doctor-who-2.jpg",
      quote:
        "The Time Lords are an immensely civilized race. We can control our own environment.  We can live forever, barring accidents and we have the secret of spacetime travel.",
    },
    {
      name: "Third Doctor",
      image: "doctor-who-3.jpg",
      quote:
        "Courage isn't just a matter of not being frightened, you know. It's being afraid and doing what you have to do, anyway.",
    },
    {
      name: "Fourth Doctor",
      image: "doctor-who-4.jpg",
      quote:
        "The very powerful and the very stupid have one thing in common - they don't change their views to fit the facts. They change the facts to fit their views, which can be uncomfortable if you happen to be one of the facts that needs changing.",
    },
    {
      name: "Fifth Doctor",
      image: "doctor-who-5.jpg",
      quote:
        "Once, a man fell asleep and dreamt he was a frog. When he woke up, he didn't know if he was a man who dreamt he was a frog, or a frog who was now dreaming he was a man.",
    },
    {
      name: "Sixth Doctor",
      image: "doctor-who-6.jpg",
      quote:
        "This is a situation that requires tact and finesse. Fortunately, I am blessed with both!",
    },
    {
      name: "Seventh Doctor",
      image: "doctor-who-7.jpg",
      quote:
        "There are worlds out there where the sky is burning, and the sea's asleep, and the rivers dream; people made of smoke and cities made of song. Somewhere there's danger, somewhere there's injustice, and somewhere else the tea's getting cold. Come on, Ace. We've got work to do!",
    },
    {
      name: "Eighth Doctor",
      image: "doctor-who-8.jpg",
      quote:
        "You feel that pounding in your heart? That tightness in the pit of your stomach? The blood rushing to your head, do you know what that is? That's adventure. The thrill and the fear, and the joy of stepping into the unknown. That's why we're all here, and that's why we're alive!",
    },
    {
      name: "War Doctor",
      image: "doctor-who-war.jpg",
      quote:
        "Great men are forged in fire. It is the privilege of lesser men to light the flame.",
    },
    {
      name: "Ninth Doctor",
      image: "doctor-who-9.jpg",
      quote:
        "No! 'Cause this is what I'm gonna' do! I'm gonna' rescue her! I'm gonna' save Rose Tyler from the middle of the Dalek fleet, and then I'm gonna' save the Earth, and then, just to finish off, I'm gonna' wipe every last stinking Dalek out of the sky!",
    },
    {
      name: "Tenth Doctor",
      image: "doctor-who-10.jpg",
      quote:
        "Don’t blink. Don’t even blink. Blink and you’re dead. They are fast. Faster than you can believe. Don’t turn your back, don’t look away, and don’t blink.",
    },
    {
      name: "Eleventh Doctor",
      image: "doctor-who-11.jpg",
      quote:
        "I'm the Doctor. I’m a Time Lord from the planet Gallifrey. I stole a time machine and ran away, and I've been flouting the principle law of my own people ever since.",
    },
    {
      name: "Twelfth Doctor",
      image: "doctor-who-12.jpg",
      quote:
        "Never be cruel. Never be cowardly. Hate is always foolish. Love is always wise. Always try to be nice, but never fail to be kind.",
    },
    {
      name: "Thirteenth Doctor",
      image: "doctor-who-13.jpg",
      quote:
        "Bit of adrenaline, dash of outrage and a hint of panic knitted my brain back together. I know exactly who I am. I’m the Doctor. Sorting out fair play throughout the universe.",
    },
  ];
  return (
    <>
      <Carousel
        index={slide}
        className={classes.slider}
        autoPlay={false}
        navButtonsAlwaysVisible={true}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.slide}>
      <div className={classes.content}>
        <p className={classes.quote}>"{props.item.quote}"</p>
        <p className={classes.name}>{props.item.name}</p>
      </div>
      <img
        className={classes.image}
        src={`/doctor-who-page/images/${props.item.image}`}
        alt={`${props.item.name} Who`}
      />
    </Paper>
  );
}

export default Slider;
