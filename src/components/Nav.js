import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainBg: {
    background:
      "linear-gradient(to bottom right, rgb(0, 175, 228), rgb(61, 106, 255))",
  },
});

const Nav = (props) => {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00a3e4",
      },
    },
  });

  const handleChange = (event, newValue) => {
    props.setNavState(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <Tabs
          value={props.navState}
          indicatorColor='primary'
          textColor='primary'
          onChange={handleChange}
          centered
          justify='space-between'
        >
          <Tab label={<span style={{ fontWeight: "bold" }}>About</span>} />
          <Tab label={<span style={{ fontWeight: "bold" }}>Experience</span>} />
          <Tab label={<span style={{ fontWeight: "bold" }}>Projects</span>} />
        </Tabs>
      </Paper>
    </ThemeProvider>
  );
};

export default Nav;
