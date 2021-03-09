import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
  line: {
    marginTop: "50px",
    opacity: "0.5",
  },
  Bookus: {
    marginTop: "50px",
    fontFamily: "Sorts Mill Goudy",
    "&:hover": {
      background: "transparent",
    },
    color: "orange",

    textTransform: "none",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  footericon: {
    marginTop: "50px",
    marginBottom: "50px",
    color: "black",
    "&:hover": {
      background: "transparent",
    },
    footertext: {
      fontFamily: "serif",
    },
  },
  footerbutton: {
    marginTop: "20px",
    textTransform: "none",
    "&:hover": {
      background: "transparent",
    },
  },
  footerbuttontext: {
    marginTop: "20px",
    textTransform: "none",
    color: "gray",
    "&:hover": {
      color: "black",
    },

  },
  icons: {
    color: "black",
  },
}));

export default function ElevateAppBar(props) {
  const { color, children, onClick } = props;
  const theme = useTheme();
  const NavBar = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  return (
    <div>
      <hr style={{ marginTop: 100, opacity: 0.3 }} />
      <div>
        <Typography align="center">
          <Button
            disableRipple
            className={classes.Bookus}
            component={Link}
            to="/Bookus"
          >
            <Typography variant="h6" className={classes.Bookus}>
              Book us now
            </Typography>
          </Button>
        </Typography>
      </div>
      <div>
        <Grid
          container
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item alignItems="center">
            <IconButton color="inherit" className={classes.footericon}>
              <a
                className={classes.icons}
                href="https://www.instagram.com/viswachandreddy/"
              >
                <InstagramIcon />
              </a>
            </IconButton>
            <IconButton color="inherit" className={classes.footericon}>
              <a
                className={classes.icons}
                href="https://www.facebook.com/viswachand.reddy/"
              >
                <FacebookIcon />
              </a>
            </IconButton>
          </Grid>
        </Grid>
      </div>
      <div>
        <Typography align="center">
          <Typography variant="h6" className={classes.footertext}>
            Made with love, in India
          </Typography>
        </Typography>
      </div>
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography align="center">
              <Button disableRipple className={classes.footerbutton}>
                <Typography variant="h8" className={classes.footerbuttontext}>
                  About
                </Typography>
              </Button>
            </Typography>
          </Grid>
          <Grid item>
            <Button
              disableRipple
              className={classes.footerbutton}
              component={Link}
              to="/Bookus"
            >
              <Typography variant="h8" className={classes.footerbuttontext}>
                Book us now
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Typography align="center">
              <Button disableRipple className={classes.footerbutton}>
                <Typography variant="h8" className={classes.footerbuttontext}>
                  Stories for Brands
                </Typography>
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
