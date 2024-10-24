import * as React from "react";
import { Box, Link, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, Email, Feed } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';

const links = [
  { href: "https://github.com/nuttysunday", icon: GitHub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/shivam-ghodke/", icon: LinkedIn, label: "LinkedIn" },
  { href: "mailto:mail@shivam.foo", icon: Email, label: "Email" },
  { href: "https://drive.google.com/file/d/1OC_mcMHkBaDhWbKEMfsnLY-uBS8Xee7G/view?usp=share_link", icon: Feed, label: "Resume" },
  { href: "https://x.com/sundaycide", icon: XIcon, label: "Twitter" }
];

const Information = ({ sx }) => (
  <Box sx={{ ...sx, display: "flex", gap: 2, justifyContent: {xs:"space-between"} }}>
    {links.map(({ href, icon: Icon, label }, index) => (
      <Tooltip key={index} title={label} arrow>
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <Box
            sx={{
              padding: 1,
              paddingRight: index === 3 ? 0 : 1,
              borderRadius: '50%',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.5)' },
              paddingLeft: {xs: index === 0 ? 0 : 1},
            }}
          >
            <Icon sx={{ color: 'white' }} />
          </Box>
        </Link>
      </Tooltip>
    ))}
  </Box>
);

export default Information;
