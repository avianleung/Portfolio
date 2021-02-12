import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";
import { animated, useSpring } from "react-spring";
import "../App.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "3vh",
    marginRight: "3vh",
    marginTop: "4vh",
    marginBottom: "4vh",
  },
  card: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Projects = () => {
  const [zoom, setZoom] = useState(false);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const projArray = [
    {
      title: "Lazy Cover Letter",
      imgSrc: "../../proj-logo/Letter.png",
      tech: ["React"],
      description:
        "This application formats input text into a cover letter rendered in real time. It replaces the company name and job position with the data provided by the user.",
      link: "https://lazy-cover-letter.herokuapp.com/",
      github: "https://github.com/avianleung/LazyCoverLetter",
    },
    {
      title: "Receipt To Recipe",
      imgSrc: "../../proj-logo/Recipe.png",
      tech: ["React, OCR"],
      description:
        "An app designed for inexperienced home cooks. It parse receipt data which is passed to another API that fetches recipes that include these ingredients.",
      github: "https://github.com/fredjywang/Receipt-To-Recipe",
    },
    {
      title: "FooDecision",
      imgSrc: "../../proj-logo/Food.png",
      tech: ["React, Node.js, Express.js, Cheerio"],
      description:
        "FooDecision is an application built for the indecisive restaurant goer. The user swipes (like tinder) on the top 30 retaurants in their location.",
      github: "https://github.com/avianleung/Restaurant-Swiper",
    },
    {
      title: "Fit Print",
      imgSrc: "../../proj-logo/Workout.png",
      tech: ["React, Node.js, Express.js, MySQL"],
      description:
        "Fit print allows users to track their workouts by interacting with a very minimalistic UI. They can request, create, update and delete workouts by using this UI.",
      github: "https://github.com/avianleung/WorkoutTrackerAPI",
    },
    {
      title: "WeatherLine",
      imgSrc: "../../proj-logo/Weather.png",
      tech: ["React"],
      description:
        "WeatherLine is a simple application that utilizes the DarkSky API as well as Google's geocoding API to return the given weather in a location requested by the user.",
      link: "https://aleung-weather-app.herokuapp.com/",
      github: "https://github.com/avianleung/WeatherLine",
    },
  ];

  useEffect(() => {
    setZoom(true);
  }, []);

  const techArray = [
    ["JavaScript", "HTML/CSS"],
    ["React", "React Native"],
    ["Node.js", "Express.js"],
    ["MySQL", "MongoDB"],
    ["AWS", "IBM Cloud"],
  ];

  return (
    <div className={classes.root}>
      <div className='row'>
        <Zoom in={zoom}>
          <Typography
            className='mainColor'
            variant='subtitle1'
            style={{ marginBottom: "4vh" }}
          >
            Noteworty Projects.
          </Typography>
        </Zoom>
      </div>
      <div className='d-flex align-items-center'>
        <div className='row justify-content-center'>
          {projArray.map((proj, idx) => (
            <Zoom in={zoom}>
              <div className='col-3' style={{ marginBottom: "3vh" }}>
                <Card
                  className={classes.card}
                  variant='outlined'
                  style={{ backgroundColor: "#fafafa" }}
                >
                  <CardContent>
                    <Typography
                      variant='subtitle1'
                      component='h2'
                      style={{ display: "flex", marginBottom: "0.75vh" }}
                    >
                      <img
                        src={proj.imgSrc}
                        style={{ width: "11%", marginRight: "2vh" }}
                      />
                      {proj.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      component='p'
                      color='textSecondary'
                      style={{ marginBottom: "0.5vh" }}
                    >
                      {proj.tech.map((tech, idx) => (
                        <spam>
                          {tech}
                          {proj.tech.length - 1 === idx ? "" : bull}
                        </spam>
                      ))}
                    </Typography>
                    <Typography
                      variant='caption'
                      component='p'
                      color='textSecondary'
                    >
                      {proj.description}
                    </Typography>
                  </CardContent>
                  <div className='d-flex justify-content-center'>
                    <IconButton
                      onClick={() => window.open(proj.github, "_blank")}
                    >
                      <GitHubIcon />
                    </IconButton>
                    {proj.hasOwnProperty("link") && (
                      <IconButton
                        onClick={() => window.open(proj.link, "_blank")}
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    )}
                  </div>
                </Card>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

//callmade
//insertlink
//open innew
