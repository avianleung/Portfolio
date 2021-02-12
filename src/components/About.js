import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import "../App.css";

const About = (props) => {
  const [zoom, setZoom] = useState(false);

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
    <div style={{ marginLeft: "3vh", marginTop: "2vh", marginRight: "2vh" }}>
      <br />
      <Zoom in={zoom}>
        <Typography className='mainColor mb-3' variant='h4'>
          Welcome! I'm Avian.
        </Typography>
      </Zoom>
      <Zoom in={zoom}>
        <Typography className='mainColor' variant='h6'>
          Software Developer & Student
        </Typography>
      </Zoom>

      <br />
      <div className='row'>
        <div className='col'>
          <Zoom in={zoom}>
            <Typography className='mainColor' variant='subtitle1'>
              I am an aspiring software engineer based in Toronto, ON who enjoys
              developing applications that live on the internet. I am a
              mechanical engineering student at the University of Waterloo and
              I'm currently in my 2A term. I create full stack applications with
              intuitive UI's and efficient backends.
            </Typography>
          </Zoom>
          <br />
          <Zoom in={zoom}>
            <Typography className='mainColor' variant='subtitle1'>
              Feel free to view my{" "}
              <span
                className='accentColor'
                onClick={() => props.setNavState(1)}
                style={{ cursor: "pointer" }}
              >
                experience
              </span>{" "}
              and{" "}
              <span
                className='accentColor'
                onClick={() => props.setNavState(2)}
                style={{ cursor: "pointer" }}
              >
                projects
              </span>{" "}
              tab to see some of my work.
            </Typography>
          </Zoom>
          <br />
          <Zoom in={zoom}>
            <Typography className='mainColor' variant='subtitle1'>
              I am currently looking for a software engineering internship for
              the Fall 2021 term!
            </Typography>
          </Zoom>
        </div>
      </div>
      <br />
      <br />
      <div className='row'>
        <div className='col'>
          <Zoom in={zoom}>
            <Typography
              className='mainColor'
              variant='subtitle1'
              align='center'
            >
              Here are a few languages and technologies I've recently been
              working with:
            </Typography>
          </Zoom>
          <br />
          {techArray.map((technology, idx) => (
            <div className='row' style={{ marginBottom: "1vh" }}>
              <div className='col'>
                <Zoom in={zoom}>
                  <Typography
                    className='mainColor'
                    variant='subtitle2'
                    align='center'
                  >
                    {technology[0]}
                  </Typography>
                </Zoom>
              </div>
              <br />
              <div className='col'>
                <Zoom in={zoom}>
                  <Typography
                    className='mainColor'
                    variant='subtitle2'
                    align='center'
                  >
                    {technology[1]}
                  </Typography>
                </Zoom>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
