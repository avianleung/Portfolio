import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Nav from "./Nav";
import Profile from "./Profile";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

const useStyles = makeStyles({
  paperBg: {
    background: "white",
  },
  mainBg: {
    background: "#240090",
  },
});

const Main = () => {
  const [navState, setNavState] = useState(0);
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className='container-fluid'>
        <div className='main-container'>
          <div className='row'>
            <Paper
              className='profile-card align-baseline'
              classes={{ root: classes.paperBg }}
              elevation={3}
              style={{ maxHeight: "100%", overflow: "auto" }}
            >
              <Profile />
            </Paper>
            <div className='nav-main'>
              <div className='nav-bar'>
                <Nav navState={navState} setNavState={setNavState} />
              </div>
              <Paper
                className='container main-card'
                classes={{ root: classes.paperBg }}
                elevation={3}
                style={{ maxHeight: "100%", overflow: "auto" }}
              >
                {navState === 0 && <About setNavState={setNavState} />}
                {navState === 1 && <Experience />}
                {navState === 2 && <Projects />}
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
