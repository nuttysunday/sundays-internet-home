"use client";

import React, { useState } from "react";
import { Card, Typography, Box, Link, Grid, Drawer, IconButton } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BackHandIcon from "@mui/icons-material/BackHand";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import FlipIcon from "@mui/icons-material/Flip";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import EdgesensorHighIcon from "@mui/icons-material/EdgesensorHigh";
import CloseIcon from "@mui/icons-material/Close";

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
    title: "Minimalistic News",
    link: "https://news.shivam.foo",
    date: "10/12/2024",
    logo: <NewspaperIcon />,
    description: {
      introduction: "A minimalistic news aggregator app using Next.js and News API.",
    },
  },
  {
    title: "Certi Tester Full Stack Web App",
    githubLink: "https://github.com/wjasper/certi-tester-deployment",
    date: "10/12/2024",
    logo: <EdgesensorHighIcon />,
    description: "A web application that connects to Certi Testers for real-time data display.",
  },
  {
    title: "Python Package for MCC Linux Drivers [Contribution to Open Source]",
    githubLink: "https://github.com/nuttysunday/Linux_Drivers",
    date: "10/12/2024",
    logo: <LinuxIcon />,
    description: "A Python package designed to ease the installation of MCC Linux drivers.",
  },
  {
    title: "Projected Ball Distance",
    githubLink: "https://github.com/wjasper/PingPongTracker",
    date: "10/12/2024",
    logo: <SportsTennisIcon />,
    description: "A machine learning project to track and predict the distance of a ping pong ball.",
  },
  {
    title: "Protocol-Based Deep Intrusion Detection for DoS and DDoS Attacks",
    githubLink:
      "https://github.com/nuttysunday/Protocol-Based-Deep-Intrusion-Detection-for-DoS-Normal-and-DDoS-Attacks",
    date: "10/12/2024",
    logo: <SensorOccupiedIcon />,
    description: "An intrusion detection system designed for DoS and DDoS attacks.",
  },
  {
    title: "Healthcare Chatbot",
    githubLink: "https://github.com/nuttysunday/healthcare_chatbot",
    date: "5/6/2022",
    logo: <SmartToyIcon />,
    description: "A chatbot designed to assist patients by answering healthcare queries.",
  },
  {
    title: "Hand Gesture Recognition",
    githubLink: "https://github.com/nuttysunday/Hand-Gesture-Recognition",
    date: "5/9/2021",
    logo: <BackHandIcon />,
    description: "A computer vision project to detect and classify hand gestures in real-time.",
  },
  {
    title: "Machine Learning and Data Analysis on Covid-19",
    githubLink: "https://github.com/nuttysunday/Covid19-Prediction",
    date: "12/17/2020",
    logo: <CoronavirusIcon />,
    description: "Data analysis and predictions on the spread of Covid-19 using machine learning.",
  },
  {
    title: "Image Colorization",
    githubLink: "#",
    date: "5/18/2022",
    logo: <FlipIcon />,
    description: "A deep learning project for colorizing black-and-white images.",
  },
];

const CaptureMyTweetButton = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDrawer = (project) => {
    setSelectedProject(project);
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
    setSelectedProject(null);
  };

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
                boxShadow: "3px 3px 0px 0px #B0BEC5",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease",
                ":hover": {
                  transform: "translate(-5px, -5px)",
                  boxShadow: "8px 8px 0px 0px #fae263, 15px 15px 0px 0px #a5b4fc",
                },
                height: "8rem",
                backgroundColor: "transparent",
                color: "#a5b4fc",
                border: "0.8px solid",
                borderColor: "#a5b4fc",
              }}
              onClick={() => handleOpenDrawer(project)}
            >
              <Box sx={{ marginRight: 2 }}>{project.logo}</Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <Typography
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "0.875rem", fontFamily: "monospace" }}
                >
                  {project.title}
                </Typography>

                {project.githubLink ? (
                  <Link href={project.githubLink} underline="none" target="_blank">
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

      <Drawer
        anchor="bottom"
        open={openDrawer}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            padding: 3,
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            width: "1050px", 
            maxWidth: "100%", 
            margin: "0 auto", 
            left: 0, 
            right: 0,
          },
        }}
      >
        {selectedProject && (
          <Box>
            <IconButton onClick={handleCloseDrawer} sx={{ position: "absolute", top: 16, right: 16 }}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              {selectedProject.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {selectedProject.description}
            </Typography>
            {selectedProject.githubLink ? (
              <Link href={selectedProject.githubLink} underline="none" target="_blank">
                View on GitHub
              </Link>
            ) : (
              <Link href={selectedProject.link} underline="none" target="_blank">
                {selectedProject.link.replace(/^https?:\/\//, "")}
              </Link>
            )}
          </Box>
        )}
      </Drawer>
    </Box>
  );
};

export default CaptureMyTweetButton;
