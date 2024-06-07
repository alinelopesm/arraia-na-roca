import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';

interface ContentPageProps {
  children: ReactNode;
}

const ContentPage: React.FC<ContentPageProps> = ({ children }) => {
  return (
    <Box sx={{ position: 'relative' }} className="p-4 sm:p-6 lg:p-8">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentPage;
