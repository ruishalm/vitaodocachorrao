import React from 'react';
import type { AgendaItem } from '../../data/agendaData';
import styles from './AgendaList.module.css';

interface AgendaListProps {
  agenda: AgendaItem[];
}

const AgendaList: React.FC<AgendaListProps> = ({ agenda }) => {
  // Agrupar itens da agenda por mês/ano para melhor visualização
  const groupedAgenda = agenda.reduce((acc, item) => {
    const date = new Date(item.date);
    const monthYear = `${date.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}`;
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(item);
    return acc;
  }, {} as Record<string, AgendaItem[]>);

  return (
    <div className={styles.agendaListContainer}>
      {Object.keys(groupedAgenda).sort((a, b) => {
        // Ordenar por mês/ano (simplificado, poderia ser mais robusto)
        const [monthA, yearA] = a.split(' ');
        const [monthB, yearB] = b.split(' ');
        const dateA = new Date(Number(yearA), new Date(Date.parse(monthA + ' 1, 2000')).getMonth());
        const dateB = new Date(Number(yearB), new Date(Date.parse(monthB + ' 1, 2000')).getMonth());
        return dateA.getTime() - dateB.getTime();
      }).map((monthYear) => (
        <div key={monthYear} className={styles.monthGroup}>
          <h2 className={styles.monthTitle}>{monthYear}</h2>
          <ul className={styles.agendaItems}>
            {groupedAgenda[monthYear].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((item) => (
              <li key={item.id} className={styles.agendaItem}>
                <div className={styles.agendaDate}>
                  <span className={styles.day}>{new Date(item.date).getDate()}</span>
                  <span className={styles.month}>{new Date(item.date).toLocaleString('pt-BR', { month: 'short' })}</span>
                </div>
                <div className={styles.agendaDetails}>
                  <h3>{item.title}</h3>
                  <p className={styles.agendaTime}>{item.time ? `Às ${item.time}` : 'Dia todo'}</p>
                  <p className={styles.agendaLocation}>Local: {item.location}</p>
                  <p className={styles.agendaDescription}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AgendaList;
