import React from 'react';
import type { Project } from '../../data/transparencyData';
import styles from './ProjectList.module.css';

interface ProjectListProps {
  data: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ data }) => {
  return (
    <div className={styles.projectListContainer}>
      <h2>Projetos de Lei</h2>
      <ul className={styles.projectList}>
        {data.map((project) => (
          <li key={project.id} className={styles.projectItem}>
            <h3>{project.title}</h3>
            <p><strong>Status:</strong> <span className={styles[project.status]}>{project.status.replace(/_/g, ' ')}</span></p>
            <p><strong>Proponente:</strong> {project.proposer}</p>
            <p>{project.summary}</p>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Detalhes</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
