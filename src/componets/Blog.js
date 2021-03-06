import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from 'prop-types';
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Frame from "../Assests/frame.jpg";
import Frame1 from "../Assests/frame1.jpg";
import Frame2 from "../Assests/frame2.jpg";
import Frame3 from "../Assests/frame3.jpg";
import Frame4 from "../Assests/frame4.jpg";
import Frame5 from "../Assests/frame5.jpg";
import Frame6 from "../Assests/frame6.jpg";
import Frame7 from "../Assests/frame7.jpg";
import Frame8 from "../Assests/frame8.jpg";
import Frame9 from "../Assests/frame9.jpg";
import Frame10 from "../Assests/frame10.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
 
  imgcontainer: {
    width: 1000,
  },
 
  media: {
    height: 300,
   maxWidth: "100%",
    [theme.breakpoints.only("xs")]: {
      height: 200,
      maxWidth: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      height: 250,
      maxWidth: "100%",
    },
    [theme.breakpoints.only("md")]: {
      height: 300,
      maxWidth: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      height: 300,
      maxWidth: "100%",
    },
  },
  // card: {

  //   width:"10px"
  // }
}));

export default function TitlebarGridList() {
  const theme = useTheme();
  const mediaquary = useMediaQuery(theme.breakpoints.up("sm"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const classes = useStyles();

//  function cols() {
//   if ( withWidth('xl')) {
//     return 4;
//   }

//   if ( withWidth('lg')) {
//     return 4;
//   }

//   if ( withWidth('md')) {
//     return 4;
//   }
//   if ( withWidth('sm')) {
//     return 3;
//   }

//   return 10;
//  }

    return (
      <div style={{ marginTop: 70 }}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <div className={classes.root}>
              <GridList
                cellHeight={md ? 400 : 280}
                spacing={30}
                cols={mediaquary ? 4 : 1}
              >
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame4}
                      component={Link}
                      to="/vc"
                    />
                    <CardContent className={classes.media}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                          fontWeight: "10px",
                        }}
                      >
                      Akhil+Divya : with love from Vizage
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame1}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                          fontWeight: "10px",
                        }}
                      >
                     Rashmi + James: Lost in Love
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame3}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                          fontWeight: "10px",
                        }}
                      >
                      Akhl+Divya  : with love from Vizage
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame2}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                          fontWeight: "10px",
                        }}
                      >
                      Rashmi + James: Lost in Love
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>

                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame6}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                          fontWeight: "10px",
                        }}
                      >
                        Akhil+Maggie : With Love from Vizag
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame3}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                          fontWeight: "10px",
                        }}
                      >
                      Akhl+Divya  : with love from Vizage
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                          fontWeight: "10px",
                        }}
                      >
                      Akhl+Divya  : with love from Vizage
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame5}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                        }}
                      >
                        Rashmi + James: Lost in Love
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame7}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                        }}
                      >
                        Rashmi + James: Lost in Love
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame8}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                        }}
                      >
                        Rashmi + James: Lost in Love
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame9}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                        }}
                      >
                        Rashmi + James: Lost in Love
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame10}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          fontFamily: "Shippori Mincho",
                        }}
                      >
                        Rashmi + James: Lost in Love
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
              </GridList>
            </div>
          </Container>
        </React.Fragment>
      </div>
    );

  };

  