// src/app/blogs/self-hosting/page.js
import { Box, Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SelfHostingPage = () => {
  const commonTextStyle = "text-teal-400 text-left md:text-justify";

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >

<Box>
        <Link href="/blogs" passHref>
          <ArrowBackIcon
            sx={{
              color: "white",
              cursor: "pointer",
              "&:hover": {
                color: "#fae263",
              },
              position: "absolute",
              left: "0rem",
              marginTop: "1rem",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          />
        </Link>
        <div>
          <p
            className={`${commonTextStyle} text-2xl font-bold underline decoration-4`}
          >
            Certi Tester web app
          </p>
          <p className={`${commonTextStyle} italic opacity-90 text-sm`}>
          Coming mid Nov
          </p>
        </div>
      </Box>

      <p className={commonTextStyle}>
        I work as a software developer, research assistant at Wilson college of
        textiles at NC State, & this project is in collaboration with Dr. Warren
        Jasper.
      </p>


    </Box>);};

export default SelfHostingPage;
