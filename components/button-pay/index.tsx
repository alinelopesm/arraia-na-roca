import React from 'react';
import { useScrollTrigger, Zoom, Box, useMediaQuery, useTheme } from '@mui/material';
import CustomButton from './custom-button';

const ButtonPay: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Zoom in={isMobile || trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          top: isMobile ? 'none' : 80,
          bottom: isMobile ? 15 : 'none',
          right: isMobile ? 'none' : 16,
          width: isMobile ? '100%' : 'auto',
          paddingX: isMobile ? 2 : 'none',
          zIndex: 9999,
        }}
        className="button-fire"
      >
        <CustomButton />
      </Box>
    </Zoom>
  );
};

export default ButtonPay;
