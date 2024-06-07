import React, { forwardRef } from 'react';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import { useThemePaletteMode } from '@/context/theme-context';
import styles from './styles.module.css';

const CustomButton: React.FC = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { themePallete } = useThemePaletteMode();

  const buttonClassName = `${styles['button-fire']} ${themePallete === 'light' ? styles['light'] : ''}`;

  return (
    <Link href="https://loja.infinitepay.io/aamatias" passHref>
      <Button
        className={buttonClassName}
        variant="contained"
        size={isMobile ? 'large' : 'small'}
      >
        Comprar ingresso
      </Button>
    </Link>
  );
};

export default CustomButton;
