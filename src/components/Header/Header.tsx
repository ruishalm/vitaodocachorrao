import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'; // Importa os estilos do Header

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Início</NavLink></li>
          <li><NavLink to="/sobre" className={({ isActive }) => isActive ? styles.active : ''}>Sobre</NavLink></li>
          <li><NavLink to="/transparencia" className={({ isActive }) => isActive ? styles.active : ''}>Transparência</NavLink></li>
          <li><NavLink to="/agenda" className={({ isActive }) => isActive ? styles.active : ''}>Agenda</NavLink></li>
          <li><NavLink to="/participe" className={({ isActive }) => isActive ? styles.active : ''}>Participe</NavLink></li>
          <li><NavLink to="/gabinete-do-povo" className={({ isActive }) => isActive ? styles.active : ''}>Gabinete do Povo</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
