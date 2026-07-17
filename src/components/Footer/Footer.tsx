import React from 'react';
import Logo from '../Logo/Logo'; // Importa o componente Logo
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Político Transparente. Todos os direitos reservados.</p>
      <div className={styles.developerInfo}>
        <p>Desenvolvido por </p>
        <Logo variant="inverse" size="small" />
      </div>
      <p>Desenvolvido com <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> e <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>.</p>
    </footer>
  );
};

export default Footer;
