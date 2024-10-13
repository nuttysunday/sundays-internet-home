import * as React from "react";
import { Box, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GetAppIcon from '@mui/icons-material/GetApp';

const Footer = ({sx}) => {
  return (
    <Box sx={{ ...sx, display: "flex", gap: 2, justifyContent:'center' }}>
      <Link
        href="https://github.com/nuttysunday"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box 
          sx={{ 
            padding: 1, 
            borderRadius: '50%', 
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.5)', 
            }
          }}
        >
          <GitHubIcon sx={{ color: 'white' }} />
        </Box>
      </Link>
      <Link
        href="https://www.linkedin.com/in/shivam-ghodke/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box 
          sx={{ 
            padding: 1, 
            borderRadius: '50%', 
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.5)', 
            }
          }}
        >
          <LinkedInIcon sx={{ color: 'white' }} />
        </Box>
      </Link>
      <Link
        href="mailto:mail@shivam.foo"
      >
        <Box 
          sx={{ 
            padding: 1, 
            borderRadius: '50%', 
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.5)', 
            }
          }}
        >
          <EmailIcon sx={{ color: 'white' }} />
        </Box>
      </Link>
      <Link
        href="https://docs.google.com/document/d/e/2PACX-1vT02vaxSFn4V0yvp61oHaj73079Y-VVu3jWX-DXa-69OOjcSHdLgowbyEShv6pVmVpNYPb4JpTsz8jg/pub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box 
          sx={{ 
            padding: 1, 
            borderRadius: '50%', 
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.5)', 
            }
          }}
        >
          <GetAppIcon sx={{ color: 'white' }} />
        </Box>
      </Link>
    </Box>
  );
};

export default Footer;
