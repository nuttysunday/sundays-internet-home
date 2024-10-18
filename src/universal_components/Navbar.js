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
      {["ABOUT", "WORK", "SKILLS", "PROJECTS", "BLOGS"].map((item) => {
        const itemPath = item === "ABOUT" ? "/" : `/${item.toLowerCase()}`;
        
        // Determine if the current link is active
        const isActive =
          (item === "ABOUT" && pathname === "/") ||
          (item !== "ABOUT" && pathname.startsWith(itemPath));

        return (
          <Link href={itemPath} passHref key={item}>
            <Typography
              sx={{
                color: isActive ? "white" : undefined,
                fontStyle: isActive ? "normal" : "italic",
                padding: '0.5rem 0',
                fontSize: { xs: '0.8rem', sm: '1rem' },
                "&:hover": { color: "gray" },
              }}
            >
              {item}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
};

export default Navbar;
