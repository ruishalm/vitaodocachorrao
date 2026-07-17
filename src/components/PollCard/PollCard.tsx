import React, { useState } from 'react';
import type { Poll, PollOption } from '../../data/participateData';
import styles from './PollCard.module.css';

interface PollCardProps {
  poll: Poll;
}

const PollCard: React.FC<PollCardProps> = ({ poll }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [voted, setVoted] = useState<boolean>(false);

  const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = (optionId: string) => {
    if (poll.status === 'active' && !voted) {
      setSelectedOption(optionId);
      // Aqui você faria uma chamada API para registrar o voto
      // Por simplicidade, estamos apenas marcando como votado localmente
      setVoted(true);
    }
  };

  return (
    <div className={`${styles.pollCard} ${poll.status === 'closed' ? styles.closed : ''}`}>
      <h3 className={styles.pollQuestion}>{poll.question}</h3>
      <p className={styles.pollDescription}>{poll.description}</p>

      <div className={styles.optionsList}>
        {poll.options.map((option: PollOption) => (
          <div key={option.id} className={styles.optionItem}>
            {poll.status === 'active' && !voted ? (
              <button
                className={`${styles.voteButton} ${selectedOption === option.id ? styles.selected : ''}`}
                onClick={() => handleVote(option.id)}
              >
                {option.text}
              </button>
            ) : (
              <div className={styles.optionResult}>
                <span>{option.text}</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0}%` }}
                  ></div>
                  <span className={styles.voteCount}>{option.votes} votos ({totalVotes > 0 ? ((option.votes / totalVotes) * 100).toFixed(1) : 0}%)</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {poll.status === 'closed' && (
        <p className={styles.statusMessage}>Enquete Encerrada ({totalVotes} votos)</p>
      )}
      {poll.status === 'active' && voted && (
        <p className={styles.statusMessage}>Obrigado(a) por votar!</p>
      )}
      {poll.status === 'active' && !voted && (
        <p className={styles.statusMessage}>Total de votos até agora: {totalVotes}</p>
      )}
    </div>
  );
};

export default PollCard;
