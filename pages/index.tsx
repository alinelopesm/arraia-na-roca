import React from 'react';

import ButtonPay from '@/components/button-pay';
import ScrollToTop from '@/components/ScrollToTop';
import ContentPage from '@/components/page-structure/content';
import Header from '@/components/page-structure/header';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { useThemePaletteMode } from '@/context/theme-context';
import About from './about';
import CustomCarousel from '@/pages/carousel';
import Contact from './contact';

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { themePallete } = useThemePaletteMode();

  return (
    <>
      <Box
        sx={{
          height: '24vh',
          backgroundImage: themePallete === 'light' ? 'url(/images/madeira-junina.png)' : 'none',
        }}
      >
        <Box 
          sx={{
            display: 'flex',
            textAlign: 'end',
            height: '24vh',
            backgroundImage: themePallete === 'light' ? 'url(/images/banner.png)' : 'url(/images/banner-dark.jpeg)',
            backgroundSize: isMobile ? 'none' : 300,
            backgroundRepeat: false ? 'no-repeat' : 'revert',
            backgroundPosition: isMobile ? 'bottom left' : 'top left',
            marginTop: themePallete === 'light' ? 0 : 0
          }}
        />
      </Box>
      <Container
        id='container-page'
        maxWidth="lg"
        className="flex flex-col min-h-72 mt-4 sm:mt-2 mb-16"
      >
        <Header />
        <ContentPage>
          <About />
          <CustomCarousel />
          <Contact />
        </ContentPage>
      </Container>
      <ButtonPay />
      <ScrollToTop />
    </>
  );
};

export default Home;
