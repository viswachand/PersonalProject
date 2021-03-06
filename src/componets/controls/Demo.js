import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";

import GridListTile from "@material-ui/core/GridListTile";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Frame from "../../Assests/frame.jpg";
import Frame1 from "../../Assests/frame1.jpg";
import Frame2 from "../../Assests/frame2.jpg";
import Frame3 from "../../Assests/frame3.jpg";
import Frame4 from "../../Assests/frame4.jpg";
import Frame5 from "../../Assests/frame5.jpg";
import Frame6 from "../../Assests/frame6.jpg";
import Frame7 from "../../Assests/frame7.jpg";
import Frame8 from "../../Assests/frame8.jpg";
import Frame9 from "../../Assests/frame9.jpg";
import Frame10 from "../../Assests/frame10.jpg";

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
    [theme.breakpoints.only("xs")]: {
      height: 300,
      maxWidth: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      height: 300,
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

const MyComponent = (props) => {
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 4;
    }

    if (isWidthUp("lg", props.width)) {
      return 4;
    }

    if (isWidthUp("md", props.width)) {
      return 3;
    }

    if (isWidthUp("sm", props.width)) {
      return 2;
    }

    return 1;
  };

  const theme = useTheme();

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <GridList cellHeight={400} spacing={30} cols={getGridListCols()}>
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
                  Akhil+Divya : with love from Vizag
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
                  Akhil+Divya : with love from Vizag
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
                  Akhil+Divya : with love from Vizag
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
                  Akhil+Divya : with love from Vizag
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
                  Akhil+Divya : with love from Vizag
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
                  Akhil+Divya : with love from Vizag
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
                  Akhil+Divya : with love from Vizag
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
  );
};

export default withWidth()(MyComponent);
