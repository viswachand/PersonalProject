import { createMuiTheme } from "@material-ui/core/styles";
import { Shadows } from "@material-ui/core/styles/shadows";

const Blue = "#3f51b5";
const white = "#fafafa";
const black = "#212121";
const diff = "#121858";

export default createMuiTheme({
  shadows: Array(25).fill("none"),
  palette: {
    common: {
      blue: `${diff}`,
    },
    primary: {
      main: `${black}`,
    },
    secondary: {
      main: `${diff}`,
    },
    black: {
      main: `${black}`,
    },
  },
  typography: {
    tab: {
      textTransform: "none",
      fontWeight: "700",
    },
    h5: {
      fontFamily: "sans-serif",

      textTransform: "none",
    },
    h6: {
      fontFamily: "Sorts Mill Goudy",
      fontweight: "18px",
      opacity: "0.9",
      textTransform: "none",
    },
    Name: {
      fontSize: "100px",
    },
  },
});

//   font-family: 'Lato', sans-serif;
// font-family: 'RocknRoll One', sans-serif;
// font-family: 'Sorts Mill Goudy', serif;
