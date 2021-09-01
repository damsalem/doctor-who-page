import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import Search from "./Search";

function Header(props) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Search slide={props.slide} setSlide={props.setSlide} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
