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
}));

export default function ElevateAppBar(props) {
 
  const theme = useTheme();
  const NavBar = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  return (
   
  <Typography align="center" variant="h1">
    <br/>
    
    
    Hi</Typography>
  );
}
