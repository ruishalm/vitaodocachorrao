import React from 'react';
import PollCard from '../components/PollCard/PollCard';
import { polls } from '../data/participateData';
import styles from './Participate.module.css';

const Participate: React.FC = () => {
  return (
    <div className={styles.participatePage}>
      <h1>Participe e Faça a Diferença</h1>
      <p className={styles.introText}>
        Sua voz é fundamental para construirmos juntos um mandato mais representativo e eficaz.
        Participe de nossas enquetes e contribua com suas opiniões e sugestões.
      </p>

      <div className={styles.pollsGrid}>
        {polls.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  );
};

export default Participate;
