import React from "react";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

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
      <br />
      Hi
    </Typography>
  );
}
