import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import { Grid } from "@material-ui/core";

export const SlideContext = React.createContext();

function App() {
  const [slide, setSlide] = React.useState(0);
  return (
    <SlideContext.Provider value={slide}>
      <Grid container={true} direction="column">
        <Grid item xs={12}>
          <Header slide={slide} setSlide={setSlide} />
        </Grid>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid item xs={12} style={{ overflow: "hidden" }}>
          <Slider />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </SlideContext.Provider>
  );
}

export default App;
