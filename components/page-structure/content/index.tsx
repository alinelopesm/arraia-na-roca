import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';

const ContentPage: React.FC = () => {
  return (
    <Box sx={{ position: 'relative'}}>
      <Grid>
        <Grid item xs={12}>
          Content
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentPage;
