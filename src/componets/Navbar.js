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
import GridList from "@material-ui/core/GridList";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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

const drawerWidth = 600;

const useStyles = makeStyles((theme) => ({
  Toolbar: {
    backgroundColor: "white",
    minHeight: "5em",
    color: "black",
  },
  toolbarmargin: {
    ...theme.mixins.toolbar,
  },

  Title: {
    display: "flex",
    flex: "1",
    justifyContent: "center",
  },
  Titletext: {
    fontFamily: "'RocknRoll One', sans-serif;",
    fontSize: "2em",
    marginLeft: "65px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5em",
      marginLeft: "0px",
    },
  },
  MenuIconButtons: {
    "&:hover": {
      background: "transparent",
    },
  },
  menuicon: {
    fontSize: "40px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
  },
  titlebutton: {
    "&:hover": {
      background: "transparent",
    },
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  hide: {
    display: "none",
  },

  drawerPaper: {
    width: drawerWidth,
  },

  container: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "50%",
    },
  },
  Menulist: {
    paddingTop: 200,
    height: "30vh",
  },
  Menulistitem: {
    "&:hover": {
      color: "#fd885d",
      background: "transparent",
    },
    textalign: "center",
    // fontFamily: "Shippori Mincho",
    // fontweight: "180px",
  },
}));

export default function ElevateAppBar(props) {
  const { color, children, onClick } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = (event) => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.Appbar}>
          <Toolbar disableGutters className={classes.Toolbar}>
            <Container fixed>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <div>
                  <div>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      className={classes.MenuIconButtons}
                      disableRipple

                      // className={clsx(classes.menuButton, open && classes.hide)}
                    >
                      <MenuIcon className={classes.menuicon} />
                    </IconButton>
                    <Drawer
                      onClick={handleDrawerClose}
                      anchor="left"
                      open={open}
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                    >
                      <Container className={classes.container}>
                        <Grid
                        // Container
                        // direction="column"
                        // justify="center"
                        // alignItems="center"
                        >
                          <Typography variant="h5" className={classes.Menulist}>
                            <ListItem
                              className={classes.Menulistitem}
                              button
                              disableRipple
                              component={Link}
                              to="/"
                            >
                              Home
                            </ListItem>
                            <ListItem
                              className={classes.Menulistitem}
                              button
                              disableRipple
                              component={Link}
                              to="/Blog"
                            >
                              Blog
                            </ListItem>
                            <ListItem
                              className={classes.Menulistitem}
                              button
                              disableRipple
                              component={Link}
                              to="/Bookus"
                            >
                              Books us :)
                            </ListItem>
                            <ListItem
                              className={classes.Menulistitem}
                              button
                              disableRipple
                            >
                              Portrait Shoots
                            </ListItem>
                            <ListItem
                              className={classes.Menulistitem}
                              button
                              disableRipple
                            >
                              Stories for brands
                            </ListItem>
                          </Typography>
                        </Grid>
                      </Container>
                    </Drawer>
                  </div>
                </div>
                <Drawer />
                <div className={classes.Title}>
                  <Button
                    disableRipple
                    className={classes.titlebutton}
                    component={Link}
                    to="/"
                  >
                    <Typography className={classes.Titletext}>
                      STONERS STORIES
                    </Typography>
                  </Button>
                </div>
                <IconButton
                  color="inherit"
                  disableRipple
                  className={classes.MenuIconButtons}
                >
                  {/* <Link href="https://www.instagram.com/viswachandreddy/" > */}
                  <InstagramIcon className={classes.menuicon} />
                  {/* </Link> */}
                  
                </IconButton>
                <IconButton
                  color="inherit"
                  disableRipple
                  className={classes.MenuIconButtons}
                  
                >
                  <FacebookIcon className={classes.menuicon} />
                </IconButton>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        {/* <div className={classes.toolbarmargin} /> */}
      </ElevationScroll>
    </React.Fragment>
  );
}

{
  /* <ListItem button>Home</ListItem>
                        <ListItem button>Blog</ListItem>
                        <ListItem button>Books us :)</ListItem>
                        <ListItem button>Portrait Shoots</ListItem>
                        <ListItem button>Stories for brands</ListItem> */
}
{
  /* <ListItemText>Home</ListItemText>
                          <ListItemText>Blog</ListItemText>
                          <ListItemText>Book us now :)</ListItemText>
                          <ListItemText>Portrait Shoots</ListItemText>
                          <ListItemText>Stories for brands</ListItemText>
                        </ListItem> */
}
