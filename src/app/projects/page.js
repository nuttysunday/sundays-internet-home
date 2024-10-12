import React from "react";
import { Card, Typography, Box, Link, Grid } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BackHandIcon from "@mui/icons-material/BackHand";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import FlipIcon from "@mui/icons-material/Flip";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import EdgesensorHighIcon from "@mui/icons-material/EdgesensorHigh";
import GitHubIcon from "@mui/icons-material/GitHub";

const LinuxIcon = (props) => (
  <img
    src="/linux.svg"
    alt="Custom Icon"
    {...props}
    style={{ width: "72px", height: "72px" }}
  />
);
const projects = [
  {
    title: "Minimilistic News",
    link: "https://news.shivam.foo",
    date: "10/12/2024",
    logo: <NewspaperIcon />,
  },
  {
    title: "Certi Tester Full Stack web app",
    githubLink: "https://github.com/wjasper/certi-tester-deployment",
    date: "10/12/2024",
    logo: <EdgesensorHighIcon />,
  },
  {
    title: "Python Package for MCC Linux Drivers [Contribution to Open Source]",
    githubLink: "https://github.com/nuttysunday/Linux_Drivers",
    date: "10/12/2024",
    logo: <LinuxIcon />,
  },
  {
    title: "Projected Ball Distance ",
    githubLink: "https://github.com/wjasper/PingPongTracker",
    date: "10/12/2024",
    logo: <SportsTennisIcon />,
  },
  {
    title: "Protocol-Based Deep Intrusion Detection for DoS and DDoS Attacks",
    githubLink:
      "https://github.com/nuttysunday/Protocol-Based-Deep-Intrusion-Detection-for-DoS-Normal-and-DDoS-Attacks",
    date: "10/12/2024",
    logo: <SensorOccupiedIcon />,
  },
  {
    title: "Healthcare Chatbot",
    githubLink: "https://github.com/nuttysunday/healthcare_chatbot",
    date: "5/6/2022",
    logo: <SmartToyIcon />,
  },
  {
    title: "Hand Gesture Recognition",
    githubLink: "https://github.com/nuttysunday/Hand-Gesture-Recognition",
    date: "5/9/2021",
    logo: <BackHandIcon />,
  },
  {
    title: "Machine Learning on Covid19",
    githubLink: "https://github.com/nuttysunday/Covid19-Prediction",
    date: "12/17/2020",
    logo: <CoronavirusIcon />,
  },
  {
    title: "Image Colorization",
    githubLink: "#",
    date: "5/18/2022",
    logo: <FlipIcon />,
  },
];

const CaptureMyTweetButton = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} rowSpacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 3,
                borderRadius: "20px",
                boxShadow: "1px 1px 0px 0px #B0BEC5",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease",
                ":hover": {
                  transform: "translate(-5px, -5px)",
                  boxShadow: "10px 10px 0px 0px #a5b4fc",
                },
                height: "8rem",
                backgroundColor: "transparent",
                color: "#a5b4fc",
              }}
            >
              <Box sx={{ marginRight: 2 }}>{project.logo}</Box>
              <Box sx={{display:'flex', flexDirection:'column', gap:'0.2rem'}}>
                <Typography
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "0.875rem", fontFamily:'monospace' }}
                >
                  {project.title}
                </Typography>

                {project.githubLink ? (
                  <Link
                    href={project.githubLink}
                    underline="none"
                    target="_blank"
                  >
                    github.link
                  </Link>
                ) : (
                  <Link href={project.link} underline="none" target="_blank">
                    {project.link.replace(/^https?:\/\//, "")}
                  </Link>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CaptureMyTweetButton;
