import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import InstagramFeed from '../components/InstagramFeed/InstagramFeed';

const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>O trabalho não para com Vitão do Cachorrão!</h1>
          <p>Seu portal direto para acompanhar a atuação e os compromissos do deputado do povo.</p>
          <Link to="/transparencia" className={styles.ctaButton}>Ver Transparência Agora</Link>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <h2>Destaques do Mandato</h2>
        <div className={styles.highlightCards}>
          <div className={styles.card}>
            <h3>Nossos Projetos</h3>
            <p>Descubra as propostas e leis que estão transformando nossa comunidade.</p>
            <Link to="/transparencia" className={styles.cardLink}>Saiba Mais</Link>
          </div>
          <div className={styles.card}>
            <h3>Ações e Atividades</h3>
            <p>Acompanhe nossa agenda e participação em eventos importantes.</p>
            <Link to="/agenda" className={styles.cardLink}>Ver Agenda</Link>
          </div>
          <div className={styles.card}>
            <h3>Participe Conosco</h3>
            <p>Sua opinião é fundamental. Dê sua sugestão ou vote em nossas enquetes.</p>
            <Link to="/participe" className={styles.cardLink}>Engaje-se</Link>
          </div>
        </div>
      </section>

      <InstagramFeed />
    </div>
  );
};

export default Home;
