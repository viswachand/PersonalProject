import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
// import tileData from "../controls/framedata";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Frame2 from "../../Assests/frame2.jpg";
import Frame3 from "../../Assests/frame3.jpg";
import Frame4 from "../../Assests/frame4.jpg";
import Frame5 from "../../Assests/frame5.jpg";
import Frame6 from "../../Assests/frame6.jpg";
import Frame7 from "../../Assests/frame7.jpg";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexWrap: 'wrap',
    justifyContent: "space-around",
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  imgcontainer: {
    width: 618,

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
  },
  titleBar: {
    // background:
    //   // "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
    //   // "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    //   "black"
  },
  icon: {
    color: "white",
  },
  media: {
    height: 220,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

export default function AdvancedGridList() {
  const classes = useStyles();
  const theme = useTheme();
  const ImageFrame = useMediaQuery(theme.breakpoints.down("xs"));
  

 
  return (
    <React.Fragment>
      <div>
        {/* {ImageFrame ? (
          imageFrameMobile
        ) : ( */}
          <div className={classes.root}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.imgcontainer}
            >
              <GridList  cellHeight={300} spacing={40}  cols={ImageFrame ? 1 : 2} >
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame7}
                      component={Link}
                      to="/vc"
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
                      Himansu +Nitish:love from Delhi
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
                      Kajal + Gautam: Mere Yaar ki Shaadi Hai
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
                        Nikhil + Shrija: Words are all I Have
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
                <GridListTile>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Frame4}
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
                       Vipasha + CJ: Words are all I Have
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
                          fontWeight: "10px",
                        }}
                      >
                        Naresh+Atulya : With Love from Karela
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
                        Mahesh + Namrutha : With Love from Bengaluru
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </GridListTile>
              </GridList>
            </Grid>
          </div>
        
      </div>

      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: 100, marginBottom: 15 }}
            component={Link}
            to="/Blog"
          >
            <Typography align="center">
              visit the blog for more photos
            </Typography>
          </Button>
        </Grid>
      </div>
    </React.Fragment>
  );
}
