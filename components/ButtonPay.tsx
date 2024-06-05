// components/ButtonPay.tsx
import React from 'react';
import { useScrollTrigger, Zoom, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import { useThemePaletteMode } from '@/context/theme-context';

const ButtonPay: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 270,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { themePallete } = useThemePaletteMode();

  return (
    <Zoom in={isMobile || trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          top: isMobile ? 'none' : 80,
          bottom: isMobile ? 15 : 'none',
          right: isMobile ? 'none' : 16,
          width: isMobile ? '100%' : 'auto',
          paddingX: isMobile ? 2 : 'none',
          zIndex: 9999,
        }}
      >
        <Link href="https://loja.infinitepay.io/aamatias" passHref>
          <Button
            variant="contained"
            color="primary"
            size={isMobile ? "medium" : "large"}
            sx={{
              backgroundImage: 'url(/utils/img/banner.jpeg)',
              backgroundColor: themePallete === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(55, 55, 55, 1)',
              color: 'white',
              borderRadius: 20,
              width: isMobile ? '100%' : 'none',
              '&:hover': {
                backgroundColor: themePallete === 'light' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(100, 100, 100, 1)',
              },
            }}
          >
            Comprar ingresso
          </Button>
        </Link>
      </Box>
    </Zoom>
  );
};

export default ButtonPay;
