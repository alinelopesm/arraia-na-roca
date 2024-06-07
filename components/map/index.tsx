import React from 'react';
import styles from './styles.module.css';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';

const CustomMap: React.FC = () => {
  const handleShareLocation = () => {
    const locationUrl = `https://maps.app.goo.gl/rLZcdSf7bij8uodH6`;
    navigator.clipboard.writeText(locationUrl);
  };

  const handleOpenInMaps = () => {
    window.open('https://maps.app.goo.gl/rLZcdSf7bij8uodH6', '_blank');
  };

  return (
    <div className={styles.map}>
      <Card>
        <CardContent>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3736.2650228225225!2d-47.2749692!3d-20.5363346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0b1f889c35f03%3A0x8716ecc770f29d8f!2sCh%C3%A1cara%20de%20Marcelo!5e0!3m2!1spt-BR!2sbr!4v1717719809667!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
          <Box sx={{ position: 'absolute', top: 24, right: 24, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', pt: 1, pr: 1 }}>
            <Button
              className={styles.button}
              onClick={handleShareLocation}
              sx={{ mb: 1 }}
            >
              Copiar Localização
            </Button>
            <Button
              className={styles.button}
              onClick={handleOpenInMaps}
            >
              Abrir Mapa
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomMap;
