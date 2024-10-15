"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";

const Navbar = ({ sx }) => {
  const pathname = usePathname();
  return (
    <Box
      sx={{
        ...sx,
        display: "flex",
        gap: { xs: '1rem', sm: "1rem", md: '3rem' },
        flexDirection: "row",
        justifyContent: { xs: "space-between" },
      }}
    >
      {["ABOUT", "WORK", "SKILLS", "PROJECTS", "BLOGS"].map((item) => (
        <Link href={item === "ABOUT" ? "/" : `/${item.toLowerCase()}`} passHref key={item}>
          <Typography
            sx={{
              color: pathname === (item === "ABOUT" ? "/" : `/${item.toLowerCase()}`) ? "white" : undefined,
              fontStyle: pathname === (item === "ABOUT" ? "/" : `/${item.toLowerCase()}`) ? "normal" : "italic",
              padding: '0.5rem 0',
              fontSize: { xs: '0.8rem', sm: '1rem' }, // Responsive font size
              "&:hover": { color: "gray" },
            }}
          >
            {item}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default Navbar;
