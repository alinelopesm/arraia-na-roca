import ButtonPay from '@/components/ButtonPay';
import ScrollToTop from '@/components/ScrollToTop';
import ContentPage from '@/components/page-structure/content';
import Header from '@/components/page-structure/header';
import { Container } from '@mui/material';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Container
        id='container-page'
        maxWidth="lg"
        className="flex flex-col mt-12 sm:mt-16"
      >
        <Header />
        <ContentPage />
        
      </Container>
      <ButtonPay />
      <ScrollToTop />
    </>
  );
};

export default Home;
