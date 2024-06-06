import React from 'react';
import { Typography } from '@mui/material';
import TextoArraia from '@/components/info-party';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './styles.module.css';

const themeProvider = createTheme({
  typography: {
    fontFamily: '"Amatic SC", cursive',
  },
});

const About = () => {
  return (
    <div id="about">
      <ThemeProvider theme={themeProvider} >
        <Typography
          className={`${styles.typographyStyle} respons`}
          variant="h4"
          component="h2"
          gutterBottom
        >
          Arraia na Roça
        </Typography>
      </ThemeProvider>
      <TextoArraia />
    </div>
  );
};

export default About;
