import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const Nav = (props) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#546175",
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
          <Tab label='About' />
          <Tab label='Experience' />
          <Tab label='Projects' />
        </Tabs>
      </Paper>
    </ThemeProvider>
  );
};

export default Nav;
