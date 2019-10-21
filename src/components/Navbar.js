import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default function Navbar() {
  const useStyles = makeStyles({
    nav: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    },
    link: {
      color: "white",
      textDecoration: "none"
    }
  });

  const classes = useStyles();

  return (
    <AppBar className={classes.nav} position="fixed">
      <Toolbar>
        <Typography>Exercise Tracker</Typography>
        <Tabs>
          <Link className={classes.link} to="/">
            <Tab label="Exercises" />
          </Link>
          <Link className={classes.link} to="/create">
            <Tab label="Add Exercise" />
          </Link>
          <Link className={classes.link} to="/user">
            <Tab label="Create User" />
          </Link>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
