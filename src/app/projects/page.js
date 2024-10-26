"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Box,
  Link,
  Grid,
  Drawer,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import projects from "./components/project";
import Image from 'next/image';


const Page = () => {
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
            <Tooltip
              enterTouchDelay={200}
              arrow
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, -50],
                      },
                    },
                  ],
                },
              }}
              title={
                <span className="font-mono text-yellow-400 rounded text-sm">
                  Click Me
                </span>
              }
              placement="top"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 200 }}
              //followCursor
            >
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
                onClick={() => {
                  handleOpenDrawer(project);
                }}
              >
                <Box sx={{ marginRight: 2 }}>{project.logo}</Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.2rem",
                  }}
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

                  {project.link && (
                    <Link
                      href={project.link}
                      underline="none"
                      target="_blank"
                      onClick={(event) => event.stopPropagation()}
                      sx={{
                        fontFamily: "monospace",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
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
            </Tooltip>
          </Grid>
        ))}
      </Grid>

      <Drawer
        anchor="bottom"
        open={openDrawer}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            padding: { xs: "0 1rem", md: "1.4rem" },
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            width: "1050px",
            maxWidth: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#18181b",
            height: { xs: "80vh", sm: "80vh", lg: "85vh" },
            //maxHeight: { xs: "80vh", sm: "80vh", lg: "80vh" },
            overflow: "auto",
            margin: "0 auto",
            paddingBottom: { xs: "1rem" },
          },
        }}
      >
        {selectedProject && (
          <Box
            className="font-mono text-yellow-400"
            sx={{
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              position: "relative",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              height: "100%",
            }}
          >
            <Box
              sx={{
                padding: 0, // No padding to avoid gaps
                margin: 0,
                position: "sticky",
                top: 0,
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background:
                  "linear-gradient(to top, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 1))",
                paddingBottom: { xs: "1rem", lg: "1rem" },
                paddingTop: { xs: "1rem" },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "monospace",
                }}
                className="font-mono text-yellow-400 underline decoration-4"
              >
                {selectedProject.title}
              </Typography>
              <IconButton onClick={handleCloseDrawer} sx={{ color: "white" }}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Typography
              variant="body1"
              sx={{
                textAlign: { sm: "left", md: "justify" },
                fontFamily: "monospace",
              }}
              className="font-mono text-pink-400"
            >
              {selectedProject.description.introduction}
            </Typography>

            {selectedProject.link && (
              <Link
                href={selectedProject.link}
                underline="none"
                target="_blank"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                {selectedProject.link.replace(/^https?:\/\//, "")}
              </Link>
            )}

            {selectedProject.githubLink && (
              <Link
                href={selectedProject.githubLink}
                underline="none"
                target="_blank"
                className="text-cyan-400"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                View on GitHub
              </Link>
            )}

            {selectedProject.specialInfo && (
              <ul
                style={{
                  listStyleType: "disc",
                  marginLeft: "20px",
                  fontFamily: "monospace",
                  color: "#38b2ac",
                }}
              >
                {selectedProject.specialInfo.map((info, index) => (
                  <li key={index}>
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: "monospace",
                        color: "#38b2ac",
                        fontWeight: "bold",
                      }}
                    >
                      {info.text}
                      {info.link && (
                        <>
                          {" "}
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#3b82f6",
                              textDecoration: "underline",
                            }}
                          >
                            (Link)
                          </a>
                        </>
                      )}
                    </Typography>
                  </li>
                ))}
              </ul>
            )}

            {selectedProject.description.youTubeEmbedSrc && (
              <Box
                sx={{
                  maxWidth: { xs: "90%", md: "600px" },
                  borderRadius: "12px",
                  overflow: "hidden",
                  margin: "0 auto",
                  minHeight: "215px",
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
              </Box>
            )}

            {selectedProject.description.image &&
              selectedProject.description.image.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    alignItems: "center",
                    border: "0px red solid",
                  }}
                >
                  {selectedProject.description.image.map((imgObj, index) => (
                    <Box
                      key={index}
                      sx={{
                        textAlign: "center",
                        border: "0px blue solid",
                        width: "300px",
                      }}
                    >
                      <img
                        src={imgObj.src}
                        alt={`Project image ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "12px",
                          marginBottom: "1rem",
                        }}
                      />
                      <Typography
                        className="font-mono text-lime-400"
                        sx={{
                          fontFamily: "monospace",
                          textAlign: { xs: "left", md: "justify" },
                        }}
                      >
                        {imgObj.caption}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}

            {selectedProject.techStack && (
              <p
                className="font-mono text-green-400"
                sx={{
                  fontFamily: "monospace",
                }}
              >
                <span
                  className="font-bold text-green-400 bold"
                  sx={{
                    fontFamily: "monospace",
                  }}
                >
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

export default Page;
