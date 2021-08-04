import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar() {
  const classes = useStyles();

  return (
          <Router>
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <AppBar position="static">
            <Toolbar>
              <Typography className={classes.title} variant="h6">
                HaFiZ ZaHiD aLi BhAtTi
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.navBar}>
            <ul className={classes.menuLink}>
              <li className={classes.abc}>
                <Link  to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link  to="/portfolio">
                  PortFolio
                </Link>
              </li>
              <li>
                <Link  to="/aboutUs">
                  About Us
                </Link>
              </li>
              <li>
                <Link  to="/contactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
        </Grid>
      </Grid>
    </div>
          </Router>
  );
}
