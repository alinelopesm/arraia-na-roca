import React from 'react';

import ButtonPay from '@/components/button-pay';
import ScrollToTop from '@/components/ScrollToTop';
import ContentPage from '@/components/page-structure/content';
import Header from '@/components/page-structure/header';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { useThemePaletteMode } from '@/context/theme-context';
import About from './about';
import CustomCarousel from '@/components/carousel';

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { themePallete } = useThemePaletteMode();

  return (
    <>
      <Box
        sx={{
          height: isMobile ? '40vh' : '45vh',
          backgroundImage: themePallete === 'light' ? 'url(/images/madeira-junina.png)' : 'none',
        }}
      >
        <Box 
          sx={{
            display: 'flex',
            textAlign: 'end',
            height: isMobile ? '40vh' : '45vh',
            backgroundImage: themePallete === 'light' ? 'url(/images/banner.png)' : 'url(/images/banner-dark.jpeg)',
            backgroundSize: isMobile ? 'none' : 300,
            backgroundRepeat: false ? 'no-repeat' : 'revert',
            backgroundPosition: isMobile ? 'bottom left' : 'top left',
            marginTop: themePallete === 'light' ? 0 : 5
          }}
        />
      </Box>
      <Container
        id='container-page'
        maxWidth="lg"
        className="flex flex-col min-h-72 mt-6 sm:mt-8 mb-16"
      >
        <Header />
        <ContentPage>
          <About />
          <CustomCarousel />
        </ContentPage>
      </Container>
      <ButtonPay />
      <ScrollToTop />
    </>
  );
};

export default Home;
