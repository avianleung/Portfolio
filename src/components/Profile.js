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
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    color: theme.palette.getContrastText("#282828"),
    backgroundColor: "#282828",
    marginTop: "5vh",
    marginBottom: "2vh",
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
    color: "#32a206a",
  },
}));

const Profile = () => {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#282828",
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className={classes.id}>
          <Avatar
            className={classes.large}
            src='../../public/logo.png'
          ></Avatar>
          <Typography className='mainColor' variant='h6'>
            Avian <span style={{ fontWeight: "bold" }}>Leung</span>
          </Typography>
          <IconButton
            style={{ marginTop: "auto", marginBottom: "2vh" }}
            onClick={() =>
              window.open("mailto:avian.leung@gmail.com", "_blank")
            }
          >
            <MailOutlineIcon className='mainColor' />
          </IconButton>
          <IconButton
            style={{ marginBottom: "2vh" }}
            onClick={() => window.open("tel:555-555-5555", "_blank")}
          >
            <PhoneOutlinedIcon className='mainColor' />
          </IconButton>
          <IconButton
            style={{ marginBottom: "2vh" }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/avianleung/", "_blank")
            }
          >
            <LinkedInIcon className='mainColor' />
          </IconButton>
          <IconButton
            style={{ marginBottom: "7vh" }}
            onClick={() =>
              window.open("https://github.com/avianleung", "_blank")
            }
          >
            <GitHubIcon className='mainColor' />
          </IconButton>
          <Button
            style={{ marginTop: "auto", marginBottom: "3vh" }}
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
