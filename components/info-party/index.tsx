import React from 'react';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';
import styles from './styles.module.css';
import TicketIcon from '@mui/icons-material/ConfirmationNumber';

const TextArraia = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      {!isMobile &&
        <header className={styles.header}>
          <Typography variant="body1" component="p">
            🎉 Venha participar do Rock in Roça nosso tradicional arraia da turma!!
            Um sábado que promete muita diversão e alegria para toda a família!
          </Typography>
        </header>
      }

      <article className={styles.article}>
        <Typography variant="body1" component="p">
          🕢 <strong>Data e Horário:</strong> <b>29 de junho</b> - Sábado -
          A partir das <b>17h</b>
        </Typography>
      </article>

      <article className={styles.article}>
        <Typography variant="body1" component="ul">
          <TicketIcon color='info'/> 
          <strong> Informações dos Ingressos: </strong>
          <TicketIcon color='info'/>
          <br/>
        
          <section>
            <strong>Categoria de Ingresso: </strong>
            <b className='text-orange-500'> INTEIRA </b> - R$ 50,00 - A partir de 13 anos e
            <b className='text-orange-500'> INFANTIL </b> R$ 10,00 - Crianças de 8 a 12 anos
          </section>
          <section>
            <strong>Itens Inclusos no Ingresso: </strong>
            <b className='text-sky-400'> Comida </b>,
            <b className='text-sky-400'> Show da banda </b> e
            <b className='text-sky-400'> Diversão </b>
          </section>
        </Typography>
        
        <Typography variant="body1" component="p"><br />
          Os ingressos são limitados, então corra e não fique de fora!
          Garanta já o seu!
          <section>
            <strong className="text-yellow-500">Lembre-se de levar SUAS BEBIDAS!!! </strong>**não teremos no local**
          </section>
        </Typography>
      </article>

      {!isMobile &&
        <article className={styles.article}>
          <Typography variant="body1" component="p">
            🌽 <strong>Comidas Típicas</strong>
          </Typography>
          <ul className={styles.ul}>
            <li>Milho verde</li>
            <li>Pipoca</li>
            <li>Canjica</li>
            <li>Paçoca</li>
            <li>Quentão</li>
            <li>E muito mais!</li>
          </ul>
        </article>
      }

      <article className={styles.article}>
        <Typography variant="body1" component="p">
          🎶 <strong>Atração Musical</strong>
        </Typography>
        <Typography variant="body1" component="p">
          Para animar a noite, contaremos com a presença incrível banda <strong>Joe`s Pub</strong>, com um repertório pra lá de especial!
        </Typography>
      </article>

      <article className={styles.article}>
        <Typography variant="body1" component="p">
          👒 <strong>Traje Típico</strong>
        </Typography>
        <Typography variant="body1" component="p">
          Vista sua melhor roupa caipira e entre no clima da festa! Haverá prêmios para os trajes mais criativos e autênticos.
        </Typography>
      </article>
    </div>
  );
};

export default TextArraia;
