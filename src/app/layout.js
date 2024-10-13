import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Box } from "@mui/material";

export const metadata = {
  title: "Shivam's Portfolio website",
  description: "Shivam's Portfolio website [A software Engineer]",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Box
          className="font-mono text-indigo-300"
          sx={{
            width: { xs: "85%", lg: "70%" },
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            border: "0px red solid",
          }}
        >
         <Box
            sx={{
              marginTop: { xs: "1rem", md: "3rem" },
              marginBottom: { xs: "1rem", md: "3rem" },
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row", md: "row" },
              gap: {xs: '1rem'}
            }}
          >
            <Footer />
            <Navbar />
          </Box>
          <Box sx={{ textAlign: { xs: "left", md: "justify" } }}>{children}</Box>
        </Box>
        a
      </body>
    </html>
  );
}
