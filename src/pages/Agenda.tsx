import React from 'react';
import AgendaList from '../components/AgendaList/AgendaList';
import { agenda } from '../data/agendaData';
import styles from './Agenda.module.css';

const Agenda: React.FC = () => {
  return (
    <div className={styles.agendaPage}>
      <h1>Agenda Pública</h1>
      <p className={styles.introText}>
        Acompanhe os compromissos e atividades do nosso mandato. Transparência é fundamental para a participação cidadã.
      </p>
      <AgendaList agenda={agenda} />
    </div>
  );
};

export default Agenda;
