import React from 'react';
import { Card, Typography, Box, Link } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const CaptureMyTweetButton = () => {
  return (
    <Box sx={{border:'0px red solid'}}>
    <Card 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: 2, 
        borderRadius: '20px', 
        boxShadow: '5px 5px 0px 0px #B0BEC5',
        position: 'relative',
        maxWidth: 300, 
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        ':hover': {
          transform: 'translate(-5px, -5px)',
          boxShadow: '10px 10px 0px 0px #A29BFE', 
        }
      }}
    >
      <SmartToyIcon 
        sx={{ 
          fontSize: 50, 
          marginRight: 2, 
        }} 
      />
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Healthcare Chatbot
        </Typography>
        <Link href="https://github.com/nuttysunday/healthcare_chatbot" underline="none" sx={{ color: '#1DA1F2' }} target="_blank"
>
          Github Link
        </Link>
      </Box>
    </Card>
    </Box>
  );
};

export default CaptureMyTweetButton;
