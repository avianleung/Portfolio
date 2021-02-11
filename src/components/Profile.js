import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const useStyles = makeStyles((theme) => ({
  id: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "3vh",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    color: theme.palette.getContrastText("#546175"),
    backgroundColor: "#546175",
  },
  color: {
    color: blue[800],
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "3vh",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
    position: "relative",
    top: "6vh",
  },
}));

const Profile = () => {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#546175",
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className={classes.id}>
          <Avatar className={classes.large}>AL</Avatar>
          <Typography className='color' variant='h6'>
            Avian <span style={{ fontWeight: "bold" }}>Leung</span>
          </Typography>
          <IconButton
            onClick={() =>
              window.open("mailto:avian.leung@gmail.com", "_blank")
            }
          >
            <MailOutlineIcon className='color' style={{ marginTop: "1vh" }} />
          </IconButton>
          <IconButton onClick={() => window.open("tel:555-555-5555", "_blank")}>
            <PhoneOutlinedIcon className='color' />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/avianleung/", "_blank")
            }
          >
            <LinkedInIcon className='color' />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://github.com/avianleung", "_blank")
            }
          >
            <GitHubIcon className='color' />
          </IconButton>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            startIcon={<CloudDownloadIcon />}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1HI-CEtiWkRQuxXJVFwfc26Fou_zdMpD7/view?usp=sharing",
                "_blank"
              )
            }
          >
            Resume
          </Button>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Profile;
