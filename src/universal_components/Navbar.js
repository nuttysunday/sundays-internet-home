"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  //, border: '1px red solid'
  return (
    <Box sx={{ flexGrow: 1, display: "flex", gap: '3rem', marginTop: '4rem', marginBottom: '3rem' }}>
      <Link href="/" passHref>
        <Typography 
          sx={{
            color: pathname === "/" ? "white" : undefined,
            fontStyle: pathname === "/" ? "italic" : "normal",
            textDecoration: pathname === "/" ? "underline" : "none",
            "&:hover": { color: "gray" }
          }}
        >
          ABOUT
        </Typography>
      </Link>
      <Link href="/work" passHref>
        <Typography 
          sx={{
            color: pathname === "/work" ? "white" : undefined,
            fontStyle: pathname === "/work" ? "italic" : "normal",
            textDecoration: pathname === "/work" ? "underline" : "none",
            "&:hover": { color: "gray" }
          }}
        >
          WORK
        </Typography>
      </Link>
      <Link href="/skills" passHref>
        <Typography 
          sx={{
            color: pathname === "/skills" ? "white" : undefined,
            fontStyle: pathname === "/skills" ? "italic" : "normal",
            textDecoration: pathname === "/skills" ? "underline" : "none",
            "&:hover": { color: "gray" }
          }}
        >
          SKILLS
        </Typography>
      </Link>
      <Link href="/" passHref>
        <Typography 
          sx={{
            color: pathname === "/" ? "white" : undefined,
            fontStyle: pathname === "/" ? "italic" : "normal",
            textDecoration: pathname === "/" ? "underline" : "none",
            "&:hover": { color: "gray" }
          }}
        >
          BLOGS
        </Typography>
      </Link>
      <Link href="/" passHref>
        <Typography 
          sx={{
            color: pathname === "/" ? "white" : undefined,
            fontStyle: pathname === "/" ? "italic" : "normal",
            textDecoration: pathname === "/" ? "underline" : "none",
            "&:hover": { color: "gray" }
          }}
        >
          PROJECTS
        </Typography>
      </Link>
      <Link href="/" passHref>
        <Typography 
          sx={{
            color: pathname === "/" ? "white" : undefined,
            fontStyle: pathname === "/" ? "italic" : "normal",
            textDecoration: pathname === "/" ? "underline" : "none",
            "&:hover": { color: "gray" }
          }}
        >
          PHOTOS
        </Typography>
      </Link>
    </Box>
  );
};

export default Navbar;
