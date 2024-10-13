"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";

const Navbar = ({ sx }) => {
  const pathname = usePathname();
  return (
    <Box sx={{ ...sx,display: "flex", gap: {xs:'0rem', sm:"1rem", md:'3rem'}, flexDirection: { xs: "column", sm: "row", md: "row" }, }} >
      <Link href="/" passHref>
        <Typography 
          sx={{
            color: pathname === "/" ? "white" : undefined,
            fontStyle: pathname === "/" ? "normal" : "italic",
            padding: '0.5rem 0', 
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
            fontStyle: pathname === "/work" ? "normal" : "italic",
            padding: '0.5rem 0', 
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
            fontStyle: pathname === "/skills" ? "normal" : "italic",
            padding: '0.5rem 0', 
            "&:hover": { color: "gray" }
          }}
        >
          SKILLS
        </Typography>
      </Link>
      <Link href="/projects" passHref>
        <Typography 
          sx={{
            color: pathname === "/projects" ? "white" : undefined,
            fontStyle: pathname === "/projects" ? "normal" : "italic",
            padding: '0.5rem 0', 
            "&:hover": { color: "gray" }
          }}
        >
          PROJECTS
        </Typography>
      </Link>
    </Box>
  );
};

export default Navbar;
