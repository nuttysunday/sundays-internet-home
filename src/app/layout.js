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
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
              marginTop: { xs: "1rem", md: "3rem" },
              marginBottom: { xs: "1rem", md: "3rem" },
              paddingLeft: {xs:'1rem'},
              paddingRight: {xs:'1rem'},
              paddingTop: {xs:'1rem'},
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row", md: "row" },
              gap: { xs: '1rem' },
              paddingBottom: { xs: '3rem', md: "0" },
              background: "linear-gradient(to top, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 1))", 
              borderRadius: "8px",
              boxShadow: {
                xs: scrolled ? "0 15px 30px -15px rgba(255,255,255,0.4)" : "none",
                lg: "none"
              },
            }}
          >
            <Navbar />
            <Information />
          </Box>
          <Box sx={{ paddingLeft: {xs:'1.2rem'},
              paddingRight: {xs:'1.2rem'},position: "relative", zIndex: 1, textAlign: { xs: "left", md: "justify" } }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
};

export default RootLayout;
