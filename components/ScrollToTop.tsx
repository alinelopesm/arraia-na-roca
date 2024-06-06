import React from 'react';
import { useScrollTrigger, Zoom, useMediaQuery, useTheme } from '@mui/material';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import { useThemePaletteMode } from '@/context/theme-context';

const ScrollToTop: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { themePallete } = useThemePaletteMode();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: isMobile ? 72 : 24,
          right: isMobile ? 16 : 24,
          display: { xs: 'block'},
        }}
      >
        <Fab
          color="primary"
          size="small"
          aria-label="scroll back to top"
          sx={{ 
            backgroundColor: themePallete === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(55, 55, 55, 1)',
            color: 'white',
            '&:hover': {
              backgroundColor: themePallete === 'light' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(100, 100, 100, 1)',
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;
