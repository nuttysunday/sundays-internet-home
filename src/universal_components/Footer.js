import * as React from "react";
import { Box, Link, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, Email, Feed } from '@mui/icons-material';

const links = [
  { href: "https://github.com/nuttysunday", icon: GitHub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/shivam-ghodke/", icon: LinkedIn, label: "LinkedIn" },
  { href: "mailto:mail@shivam.foo", icon: Email, label: "Email" },
  { href: "https://docs.google.com/document/d/e/2PACX-1vT02vaxSFn4V0yvp61oHaj73079Y-VVu3jWX-DXa-69OOjcSHdLgowbyEShv6pVmVpNYPb4JpTsz8jg/pub", icon: Feed, label: "Resume" }
];

const Footer = ({ sx }) => (
  <Box sx={{ ...sx, display: "flex", gap: 2 }}>
    {links.map(({ href, icon: Icon, label }, index) => (
      <Tooltip key={index} title={label} arrow>
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <Box
            sx={{
              padding: 1,
              paddingLeft: index === 0 ? 0 : 1,
              borderRadius: '50%',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.5)' },
            }}
          >
            <Icon sx={{ color: 'white' }} />
          </Box>
        </Link>
      </Tooltip>
    ))}
  </Box>
);

export default Footer;
