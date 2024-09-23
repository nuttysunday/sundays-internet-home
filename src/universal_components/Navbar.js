"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Box sx={{ flexGrow: 1, display: "flex", gap: '3rem' }}>
      <Link href="/" passHref>
        <Typography 
          sx={{
            color: pathname === "/" ? "white" : undefined,
            fontStyle: pathname === "/" ? "italic" : "normal",
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
            fontStyle: pathname === "/work" ? "italic" : "normal",
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
            fontStyle: pathname === "/skills" ? "italic" : "normal",
            padding: '0.5rem 0', 
            "&:hover": { color: "gray" }
          }}
        >
          SKILLS
        </Typography>
      </Link>
    </Box>
  );
};

export default Navbar;
