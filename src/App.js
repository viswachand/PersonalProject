import React from "react";
import "./App.css";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./componets/controls/Theme";
import GridList from "@material-ui/core/GridList";
import Bookus from "./componets/Bookus";
import Header from "./componets/Navbar";
import Footer from "./componets/Footer";
import Body from "./componets/Body";

import Vc from './componets/BlogPages/Vc+maggie'
import Blog from './componets/controls/Demo'

const useStyles = makeStyles({
  appMain: {
    backgroundColor: "white",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        
        <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/Bookus" component={Bookus} />
            <Route exact path="/" component={Body} />            
            <Route exact path="/Blog" component = {Blog}/>
            <Route exact path="/vc" component = {Vc}/> 
          </Switch>
          
          <Footer />
        </BrowserRouter>
        
       
      </div>
    </ThemeProvider>
  );
}

export default App;
