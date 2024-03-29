import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Grid } from "@material-ui/core";
import Controls from "../componets/controls/controls";
import SwipeableTextMobileStepper from "../componets/controls/images";
import NavBar from "../componets/Navbar";
import Footer from "../componets/Footer";
import ImageShowCase from "./controls/ImageFrame";
import Body from "./Body";
import Button from "@material-ui/core/Button";
import Bookus from './Bookus'
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  toolbarmargin: {
    ...theme.mixins.toolbar,
  },
}));

export default function ElevateAppBar(props) {
  const { color, children, onClick } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <div>
          <NavBar />
        </div>  
        <div>
          
        </div>
        <SwipeableTextMobileStepper />
        <Body />
        <br></br>
        <div>
        <ImageShowCase />
        </div>
        {/* <Bookus/> */}
       

        <hr style={{ marginTop: 100 }}></hr>
        <Footer />
      </Container>
    </React.Fragment>
  );
}
