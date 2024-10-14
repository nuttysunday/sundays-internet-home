"use client";

import React, { useState, useEffect } from 'react';
import "./globals.css";
import Navbar from "@components/Navbar";
import Information from "@components/Information";
import { Box } from "@mui/material";

 const metadata = {
  title: "Shivam's Portfolio website",
  description: "Shivam's Portfolio website [A software Engineer]",
};

const RootLayout = ({ children }) => {
  const [scrolling, setScrolling] = useState(false);
  let scrollTimeout;

  const handleScroll = () => {
    setScrolling(true);

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      setScrolling(false);
    }, 800);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <Box
          className="font-mono text-indigo-300"
          sx={{
            width: { xs: "100%", lg: "70%" },
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1000, 
              marginY: { xs: "1rem", md: "3rem" },
              padding: { xs: '1rem', md: '2rem 2rem 0rem' },
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row", md: "row" },
              gap: { xs: '1rem' },
              background: "linear-gradient(to top, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 1))", 
              borderRadius: "8px",
              boxShadow: {
                xs: scrolling ? "0 15px 30px -15px rgba(255,255,255,0.4)" : "none",
                lg: "none"
              },
            }}
          >
            <Navbar />
            <Information />
          </Box>
          <Box sx={{  padding: { xs: '1.2rem 1.2rem 0rem', md: '2rem 2rem 0rem' },position: "relative", zIndex: 1, textAlign: { xs: "left", md: "justify" } , marginBottom:'4rem'}}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
};

export default RootLayout;
