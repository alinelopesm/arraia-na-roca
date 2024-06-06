import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import About from '@/pages/about';
import CustomCarousel from '../carousel';

const ContentPage: React.FC = () => {
  return (
    <Box sx={{ position: 'relative'}}>
      <Grid>
        <Grid item xs={12}>
          <About />
          <CustomCarousel />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentPage;
