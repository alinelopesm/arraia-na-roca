import React from 'react';
import styles from './styles.module.css';
import { Typography } from '@mui/material';
import CustomMap from '@/components/map';

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <Typography variant="body1" component="p" sx={{ mb: 1 }}>
          Vamos juntos fazer um arraiá inesquecível!
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 1 }}>
          📅 <strong>Data:</strong> 29/06/2024 (Sábado)
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 1 }}>
          📍 <strong>Local:</strong> <a className={styles['link-location']}  href="https://maps.app.goo.gl/rLZcdSf7bij8uodH6" target="_blank" rel="noopener noreferrer">Aqui esta a localização</a>
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 1 }}>
          🕢 <strong>Horário:</strong> A partir das 17h
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          <strong className="text-yellow-500">Lembre-se de levar o que for beber!!!</strong><br/>
          Esperamos por você! 🌟🎉🌽🎶
        </Typography>
      </div>
      <CustomMap />
    </div>
  );
};

export default Contact;
