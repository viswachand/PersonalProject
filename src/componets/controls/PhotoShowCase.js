import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import tileData from "./TileData";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  media:{
    [theme.breakpoints.only("xs")]: {
      height: 204,
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
  }
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
      return 4;
    }

    if (isWidthUp("sm", props.width)) {
      return 3;
    }

    return 2;
  };

  const classes = useStyles();
  const theme = useTheme();
  const mediaquary = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <GridList
      cellHeight={mediaquary? 200 : 310}
      className={classes.gridList}
      cols={getGridListCols()}
    >
      {tileData.map((tile) => (
        <GridListTile key={tile.img}>
          <img
           className={classes.media}
            src={tile.img}
            alt={tile.title}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default withWidth()(MyComponent);
