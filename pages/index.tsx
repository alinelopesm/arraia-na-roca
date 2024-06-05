import ButtonPay from '@/components/ButtonPay';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/page-structure/header';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ButtonPay />
      <ScrollToTop />
    </>
  );
};

export default Home;
