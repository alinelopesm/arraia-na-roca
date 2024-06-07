import React from 'react';
import styles from './styles.module.css';
import { Typography } from '@mui/material';

const CustomMap: React.FC = () => {
  return (
    <div className={styles.map}>
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
    </div>
  );
};

export default CustomMap;
