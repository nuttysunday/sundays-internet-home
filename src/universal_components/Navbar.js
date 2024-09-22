"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
        <Box sx={{ flexGrow: 1, display: "flex", gap: '5rem', border:'1px red solid', marginTop:'5rem', marginBottom:'5rem' }}>
          <Link href="/" passHref style={{ textDecoration: "none" }}>
            <Typography sx={{ color: pathname === "/" ? "gray" : "white", fontStyle: pathname === "/" ? "italic" : "normal", textDecoration: pathname === "/" ? "underline" : "none", "&:hover": { color: "gray" }}}>
              ABOUT
            </Typography>
          </Link>
          <Link href="/work" passHref style={{ textDecoration: "none" }}>
            <Typography sx={{ color: pathname === "/work" ? "gray" : "white", fontStyle: pathname === "/work" ? "italic" : "normal", textDecoration: pathname === "/work" ? "underline" : "none", "&:hover": { color: "gray" }}}>
              WORK
            </Typography>
          </Link>
          <Link href="/skills" passHref style={{ textDecoration: "none" }}>
            <Typography sx={{ color: pathname === "/skills" ? "gray" : "white", fontStyle: pathname === "/skills" ? "italic" : "normal", textDecoration: pathname === "/skills" ? "underline" : "none", "&:hover": { color: "gray" }}}>
              SKILLS
            </Typography>
          </Link>
        </Box>

  );
};

export default Navbar;
