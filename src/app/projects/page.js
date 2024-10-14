"use client";

import React, { useState } from "react";
import {
  Card,
  Typography,
  Box,
  Link,
  Grid,
  Drawer,
  IconButton,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BackHandIcon from "@mui/icons-material/BackHand";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import FlipIcon from "@mui/icons-material/Flip";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import EdgesensorHighIcon from "@mui/icons-material/EdgesensorHigh";
import CloseIcon from "@mui/icons-material/Close";

//https://github.com/PiyushCC/ai-image-enhancer-web-app

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
    title: "Python Package for MCC Linux Drivers [Contribution to Open Source]",
    githubLink: "https://github.com/nuttysunday/Linux_Drivers",
    date: "2024",
    logo: <LinuxIcon />,
    description:
      "A Python package designed to ease the installation of MCC Linux drivers.",
  },
  {
    title: "Certi Tester Full Stack Web App",
    githubLink: "https://github.com/wjasper/certi-tester-deployment",
    date: "2024",
    logo: <EdgesensorHighIcon />,
    description: {
      introduction:
        "A web application that connects to Certi Testers for real-time data display.",
    },
  },
  {
    title: "Minimalistic News",
    link: "https://news.shivam.foo",
    date: "2024",
    logo: <NewspaperIcon />,
    description: {
      introduction:
        "Minimalistic News was created to provide a quick and straightforward way to access the latest news headlines. With filtering options based on country, category, and language, it offers a clean and clutter-free experience without annoying ads. I was exploring NextJS and learned its cool features like Server-side Rendering and Caching, how it caches the requeste and doesn't query to the database/external API, however for fresh updates, I am clearing the cache every 12 hours.",
    },
    techStack:
      "NextJS (React), Deployed on Vercel, Material UI, TailwindCSS, NewsAPI",
    githubLink: "https://github.com/nuttysunday/news",
  },
  {
    title: "Projected Ball Distance",
    githubLink: "https://github.com/wjasper/PingPongTracker",
    date: "2024",
    logo: <SportsTennisIcon />,
    description:
      "A machine learning project to track and predict the distance of a ping pong ball.",
  },
  {
    title: "Image Colorization",
    date: "Sept 2021",
    logo: <FlipIcon />,
    description: {
      introduction:
        "This was my undergrad project, and my responsiblity here was to train and load the deep learning model, I used google colab for the first time, and was pretty impressed how fast GPU's it has, it was pretty cool, the model used to take input as Black and White image and spit out colored image. Developed a neural network model inspired by the research paper titled Let There Be Color! using the TensorFlow framework. The project involved meticulous data cleansing and preprocessing. Subsequently, trained the neural network model, enabling it to perform the transformation of grayscale images into vividly colored representations.",
      youTubeEmbedSrc:
        "https://www.youtube.com/embed/TuPTcf4F_EE?si=xSbXSscLsUtWalxW",
    },
    githubLink:
      "https://colab.research.google.com/drive/1LHuboysL-nvAOni9WLAMekQEWJyjYQqX?usp=sharing",
    techStack: "Python, TensorFlow, Google Colab, CNN, Neural Networks"
  },
  {
    title: "Protocol-Based Deep Intrusion Detection for DoS and DDoS Attacks",
    githubLink:
      "https://github.com/nuttysunday/Protocol-Based-Deep-Intrusion-Detection-for-DoS-Normal-and-DDoS-Attacks",
    date: "May 2022",
    logo: <SensorOccupiedIcon />,
    description: {
      introduction: "This is actually very cool project, and my first project as a freelancer, I am very proud that it has 20 stars on Github. This is my biggest money earned at that point, (around 200 bucks for 10 hours of work). This was super motivating for me. It is acutally based on the research paper, Protocol Based Deep Intrusion Detection for DoS Normal and DDoS Attacks. So what i did was collected the data, map the parameters [trust me it was difficult], process the data, and clean it. Trained a neural network (LSTM) using Tensorflow of the notion of upsampling, because the data was highly imbalance. ",

    },
    techStack:"Python, TensorFlow, LSTM, Deep Learning, Pandas, Numpy, Matplotlib, Sklearn"
  },
  {
    title: "Healthcare Chatbot",
    githubLink: "https://github.com/nuttysunday/healthcare_chatbot",
    date: "March 2022",
    logo: <SmartToyIcon />,
    description: {
      introduction:
        "I believe this to an okayish project, not like super proud of it, but its alright. Created an advanced healthcare chatbot proficient in engaging in human-like dialogues through the application of Natural Language Processing (NLP) techniques, demonstrating a remarkable 92% accuracy in disease prediction when provided with symptoms as input.",
      youTubeEmbedSrc:
        "https://www.youtube.com/embed/GEdzmrP38Ec?si=KpTOYmQQiP0cFAj6",
    },
    techStack:
      "Python, TensorFlow, NLP, Sklearn, Seaborn, Numpy, Pandas, Streamlit",
  },
  {
    title: "Hand Gesture Recognition",
    githubLink: "https://github.com/nuttysunday/Hand-Gesture-Recognition",
    date: "May 2021",
    logo: <BackHandIcon />,
    description: {
      introduction:
        "This was my undergrad project, I was still new to programming, I as you can see in the video demonstration I look very serious, as I was not used to get annoyed by the bugs as I am now. I also remember my friend Akash helped me fix one bug, lol. I also posted this on reddit and got a lot of upvotes, hehe. Developed this project using OpenCV and Mediapipe, users can control video playback, including play/pause functionality, as well as adjust the volume of videos being played on their system.",
      youTubeEmbedSrc:
        "https://www.youtube.com/embed/GPhvTHByZdo?si=gVNtKda2kGTpFo-3",
    },
    techStack: "Python, OpenCV, Mediapipe, Pycaw",
  },
  {
    title: "Machine Learning and Data Analysis on Covid-19",
    githubLink: "https://github.com/nuttysunday/Covid19-Prediction",
    date: "Dec 2020",
    logo: <CoronavirusIcon />,
    description: {
      introduction:
        "This project is very close to my heart, as it was the first one I did on my own, got out of tutorial hell, I am really still very proud of it, one cool thing thing about it is I sold this to a youtuber for ($50 bucks), so it was my life's first earning. The project used Matplotlib and Seaborn to create visually compelling representations of COVID-19 data, and machine learning (polynomial regression) to predict the number of cases over a certain time period.",
      youTubeEmbedSrc:
        "https://www.youtube.com/embed/ue7DTDzMCMo?si=wOvbmLQLhZhEvVp1",
    },
    techStack:
      "Python, Pandas, Numpy, Matplotlib, Seaborn, Plotly, Polynomial regression, Machine Learning, Jupyter Notebook",
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
                  boxShadow:
                    "8px 8px 0px 0px #fae263, 15px 15px 0px 0px #a5b4fc",
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
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
              >
                <Typography
                  align="left"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                    fontFamily: "monospace",
                  }}
                >
                  {project.title}
                </Typography>

                {!project.link && project.githubLink && (
                  <Link
                    href={project.githubLink}
                    underline="none"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()} // Prevents drawer from opening
                  >
                    View on GitHub
                  </Link>
                )}

                {project.link && (
                  <Link
                    href={project.link}
                    underline="none"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()} // Prevents drawer from opening
                  >
                    {project.link.replace(/^https?:\/\//, "")}
                  </Link>
                )}
              </Box>
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 8,
                  right: 16,
                  fontSize: "0.75rem",
                  color: "#fae263",
                  fontFamily: "monospace",
                }}
              >
                {project.date}
              </Typography>
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
            backgroundColor: "#18181b",
          },
        }}
      >
        {selectedProject && (
          <Box
            className="font-mono text-yellow-400"
            sx={{ display: "flex", gap: "2rem", flexDirection: "column" }}
          >
            <IconButton
              onClick={handleCloseDrawer}
              sx={{ position: "absolute", top: 16, right: 16, color: "white" }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h5"
              className="font-mono text-yellow-400 underline decoration-4"
            >
              {selectedProject.title}
            </Typography>

            {selectedProject.link && (
              <Link
                href={selectedProject.link}
                underline="none"
                target="_blank"
              >
                {selectedProject.link}
              </Link>
            )}

            <Typography
              variant="body1"
              sx={{ textAlign: "justify" }}
              className="font-mono text-pink-400"
            >
              {selectedProject.description.introduction}
            </Typography>

            {selectedProject.description.youTubeEmbedSrc &&(<Box
              sx={{
                maxWidth: { xs: "90%", md: "600px" },
                borderRadius: "12px",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              <iframe
                src={selectedProject.description.youTubeEmbedSrc}
                allow="accelerometer; clipboard-write; encrypted-media"
                title="YouTube video player"
                style={{
                  width: "100%",
                  height: "215px",
                  border: "none",
                }}
              />
            </Box>)}

            {selectedProject.githubLink && (
              <Link
                href={selectedProject.githubLink}
                underline="none"
                target="_blank"
                className="font-bold text-cyan-400"
              >
                View on GitHub
              </Link>
            )}

            {selectedProject.techStack && (
              <p className="font-mono text-green-400">
                <span className="font-bold text-green-400 bold">
                  Tech Stack:{" "}
                </span>
                {selectedProject.techStack}
              </p>
            )}
          </Box>
        )}
      </Drawer>
    </Box>
  );
};

export default CaptureMyTweetButton;
