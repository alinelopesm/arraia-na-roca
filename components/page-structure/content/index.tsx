import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';

const ContentPage: React.FC = () => {
  return (
    <Box sx={{ position: 'relative'}}>
      <Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              height: '50vh',
              backgroundImage: 'url(/utils/img/testemadeira.jpeg)',
              backgroundRepeat: 'no-repeats',
              border: '1px solid red'
            }}
          >
            Contente
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentPage;
