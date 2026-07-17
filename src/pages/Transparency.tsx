import React from 'react';
import ExpenseChart from '../components/Charts/ExpenseChart';
import ActivityTable from '../components/Tables/ActivityTable';
import ProjectList from '../components/Lists/ProjectList';
import { expenses, activities, projects } from '../data/transparencyData';
import styles from './Transparency.module.css'; // Criar este arquivo de estilo

const Transparency: React.FC = () => {
  return (
    <div className={styles.transparencyPage}>
      <h1>Portal da Transparência</h1>
      <p className={styles.introText}>
        Bem-vindo ao Portal da Transparência, um espaço dedicado a prestar contas sobre as atividades e o uso dos recursos públicos. Acreditamos que a transparência é a base para uma governança responsável e para fortalecer a confiança entre o político e os cidadãos.
      </p>

      <section className={styles.sectionCard}>
        <h2>Gastos de Gabinete</h2>
        <p>Acompanhe como os recursos são investidos para garantir um mandato eficiente e produtivo.</p>
        <ExpenseChart data={expenses} />
      </section>

      <section className={styles.sectionCard}>
        <h2>Atividade Parlamentar</h2>
        <p>Conheça a participação do político em votações, reuniões e eventos importantes.</p>
        <ActivityTable data={activities} />
      </section>

      <section className={styles.sectionCard}>
        <h2>Projetos de Lei</h2>
        <p>Veja os projetos propostos, seu status e impacto para a comunidade.</p>
        <ProjectList data={projects} />
      </section>
    </div>
  );
};

export default Transparency;
