import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    width: 350,
  },
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

const Experience = () => {
  const [zoom, setZoom] = useState(false);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const expArray = [
    {
      period: "Winter 2021",
      company: "University of Waterloo",
      position: "Full Stack Developer",
      tech: ["React", "WebRTC", "IBM Cloud", "Nginx"],
      color: "#00c57a",
    },
    {
      period: "Summer 2020",
      company: "Fiberlink Inc.",
      position: "Full Stack Developer",
      tech: ["React", "Node.js", "Express.js", "MySQL", "AWS"],
      color: "#00A3E4",
    },
    {
      period: "Summer 2020",
      company: "Mingle Mask",
      position: "Full Stack Developer",
      tech: ["React", "Node.js", "Express.js", "MySQL", "AWS"],
      color: "#000BE6",
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
    <div className={classes.root} style={{ marginLeft: "1vh" }}>
      <div className='row'>
        <Zoom in={zoom}>
          <Typography
            className='mainColor'
            variant='subtitle1'
            style={{ marginTop: "8vh" }}
          >
            These are some of the places I've worked.
          </Typography>
        </Zoom>
      </div>
      <div className='row mb-5'>
        {expArray.map((exp, idx) => (
          <Zoom in={zoom}>
            <div className='col'>
              <Card
                className={classes.card}
                variant='outlined'
                elevation={3}
                style={{ borderColor: exp.color }}
              >
                <CardContent>
                  <Typography
                    className={classes.title}
                    color='textSecondary'
                    gutterBottom
                  >
                    {exp.period}
                  </Typography>
                  <Typography variant='h6' component='h2'>
                    <span style={{ color: exp.color }}>{exp.position}</span>
                  </Typography>
                  <Typography className={classes.pos} color='textSecondary'>
                    {exp.company}
                  </Typography>
                  <Typography
                    variant='body2'
                    component='p'
                    color='textSecondary'
                  >
                    {exp.tech.map((tech, idx) => (
                      <spam>
                        {tech}
                        {exp.tech.length - 1 === idx ? "" : bull}
                      </spam>
                    ))}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Zoom>
        ))}
      </div>
      <div className='row'>
        <Zoom in={zoom}>
          <Typography
            className='mainColor text-center'
            variant='subtitle1'
            style={{ marginBottom: "10vh" }}
          >
            See my{" "}
            <span
              className='compColor'
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1HI-CEtiWkRQuxXJVFwfc26Fou_zdMpD7/view?usp=sharing",
                  "_blank"
                )
              }
              style={{ cursor: "pointer" }}
            >
              resume
            </span>{" "}
            for more details.
          </Typography>
        </Zoom>
      </div>
    </div>
  );
};

export default Experience;
