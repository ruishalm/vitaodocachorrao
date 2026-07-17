import React from 'react';
import type { Activity } from '../../data/transparencyData';
import styles from './ActivityTable.module.css';

interface ActivityTableProps {
  data: Activity[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ data }) => {
  return (
    <div className={styles.tableContainer}>
      <h2>Atividade Parlamentar Recente</h2>
      <table className={styles.activityTable}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Resultado</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.date}</td>
              <td>{activity.description}</td>
              <td>{activity.type}</td>
              <td>{activity.result || '-'}</td>
              <td>
                {activity.link ? (
                  <a href={activity.link} target="_blank" rel="noopener noreferrer">Ver Detalhes</a>
                ) : (
                  '-'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
