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
import PhotoShowCase from "./controls/PhotoShowCase";
import Img from "../Assests/img.jpg";
import Love from "../Assests/love.jpg";
import { Link } from "react-router-dom";
import Blog from "../Assests/blog.jpg";
import Container from "@material-ui/core/Container";
import ImageSlider from './controls/images';
import Imageframe from './controls/ImageFrame';

const useStyles = makeStyles((theme) => ({
  Selftextone: {
    margin: "60px 0px 21.8px",
  },
  Selftexttwo: {
    margin: "18px 0px 50px",
  },
  Shoots: {
    "&:hover": {
      background: "transparent",
    },
  },
  textcolour: {
    color: "#fd885d",
    "&:hover": {
      color: "black",
    },
    fontFamily: "'Sorts Mill Goudy', serif",
    textDecoration: "none",
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      width: "350px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
  },
  loveimg: {
    width: 620,
    [theme.breakpoints.down("sm")]: {
      width: "315px",
    },
  },
  italictext: {
    fontFamily: "serif",
    fontWeight: "Bolder",
    fontSize: "25px",
    opacity: "0.8",
  },
}));
const Text = (
  <div>
    <Typography
      align="center"
      variant="h6"
      style={{ marginTop: 25, textdecoration: "justify", opacity: "0.8" }}
    >
      At Stories by Joseph Radhik, we have travelled across the world to create
      beautiful, moving images of love. Find out about our shoot experience
      here.
      <br /> Note: We do not shoot in the USA
    </Typography>
  </div>
);

const Textone = (
  <div>
    <Typography
      variant="h6"
      align="center"
      style={{ marginTop: 30, marginBottom: 30 }}
    >
      Stories by Viswachand Reddy is recognized as one of the world's finest
      wedding photography firms. We create exquisite visual stories rooted in
      heart, rooted in emotion, rooted in the story of the moment.
    </Typography>
  </div>
);

export default function ElevateAppBar(props) {
  const { color, children, onClick } = props;
  const theme = useTheme();
  const mediaquary = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  return (
    <Container  style={{ marginTop:15}}>
      <div>
        <ImageSlider/>
      </div>
      <div className={classes.SelfText}>
        <div>
          <Typography
            variant="h5"
            align="center"
            className={classes.Selftextone}
          >
            Featured in Vogue, Grazia, Harper's, People magazine and more. And
            yes, <br />
            on every bride's wishlist.
          </Typography>
        </div>
        <div>
          {mediaquary ? (
            Textone
          ) : (
            <Typography
              variant="h6"
              align="center"
              className={classes.Selftexttwo}
            >
              Stories by Viswachand Reddy is recognized as one of the world's
              finest wedding photography firms. We create <br /> exquisite
              visual stories rooted in heart, rooted in emotion, rooted in the
              story of the moment.
            </Typography>
          )}
        </div>
        <div>
          <PhotoShowCase />
        </div>
        <div>
          <Typography
            variant="h6"
            align="center"
            className={classes.Selftexttwo}
          >
            and much more
          </Typography>
        </div>
        <div>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: 5, marginBottom: 15 }}
              component={Link}
              to="/Bookus"
            >
              <Typography align="center">
                Be the star in your story, Books us now
              </Typography>
            </Button>
          </Grid>
        </div>
        <div>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Button className={classes.Shoots} style={{ marginTop: 15 }}>
              <Typography className={classes.textcolour} align="center">
                <i>New! Portrait Shoots by Stories.</i>
              </Typography>
            </Button>

            <Typography align="center">
              <i className={classes.italictext}>
                celebrate you love with us this season
              </i>
            </Typography>
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <img className={classes.img} src={Img} />
          </Grid>
        </div>
        <div>
          <Grid container direction="row" justify="center" alignItems="center">
            <Typography align="center" variant="h5" style={{ marginTop: 25 }}>
              Over 400 brides and grooms
            </Typography>
          </Grid>
        </div>
        <div>
          <Grid container direction="row" justify="center" alignItems="center">
            <Typography align="center" variant="h6" style={{ marginTop: 25 }}>
              <i>In 29 countries around the world</i>
            </Typography>
          </Grid>
        </div>
        <div>
          {mediaquary ? (
            Text
          ) : (
            <Typography
              align="center"
              variant="h6"
              style={{
                marginTop: 25,
                textdecoration: "justify",
                opacity: "0.8",
              }}
            >
              At Stories by Joseph Radhik, we have travelled across the world to
              create
              <br /> beautiful, moving images of love. Find out about our shoot
              experience here.
              <br /> Note: We do not shoot in the USA
            </Typography>
          )}
        </div>
        <hr style={{ marginTop: 20, width: "50%", opacity: "0.5" }} />
        <div>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Button
              className={classes.Shoots}
              style={{ marginTop: 15, marginBottom: 20 }}
            >
              <Typography variant="h5" align="center">
                New! <i>Portrait Shoots by Stories.</i>
              </Typography>
            </Button>
          </Grid>
        </div>
        <div>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <img src={Love} className={classes.loveimg} />
          </Grid>
        </div>
        <hr
          style={{
            marginTop: 70,
            marginBottom: 30,
            width: "50%",
            opacity: "0.5",
          }}
        />
        {/* <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <img src={Blog} />
        </Grid>
      </div> */}
        <div>
          <Typography
            variant="h4"
            align="center"
            style={{
              fontFamily: "Shippori Mincho",
              marginTop: 50,
              marginBottom: 30,
            }}
          >
            Featured on the blog
          </Typography>
        </div>
        <div>
          <Imageframe/>
        </div>

        {/* <hr style={{ marginTop: 100 }}></hr> */}
      </div>
    </Container>
  );
}
