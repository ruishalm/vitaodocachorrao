interface Expense {
  id: string;
  category: string;
  amount: number;
  month: string;
  year: number;
}

interface Activity {
  id: string;
  date: string; // YYYY-MM-DD
  description: string;
  type: 'voting' | 'meeting' | 'event';
  result?: 'approved' | 'rejected' | 'present' | 'absent';
  link?: string;
}

interface Project {
  id: string;
  title: string;
  status: 'proposed' | 'in_progress' | 'approved' | 'rejected';
  summary: string;
  proposer: string;
  link?: string;
}

export type { Expense, Activity, Project };

export const expenses: Expense[] = [
  { id: 'exp1', category: 'Travel', amount: 1200, month: 'Janeiro', year: 2024 },
  { id: 'exp2', category: 'Office Supplies', amount: 350, month: 'Janeiro', year: 2024 },
  { id: 'exp3', category: 'Personnel', amount: 5000, month: 'Janeiro', year: 2024 },
  { id: 'exp4', category: 'Travel', amount: 1500, month: 'Fevereiro', year: 2024 },
  { id: 'exp5', category: 'Office Supplies', amount: 400, month: 'Fevereiro', year: 2024 },
  { id: 'exp6', category: 'Personnel', amount: 5000, month: 'Fevereiro', year: 2024 },
  { id: 'exp7', category: 'Communication', amount: 800, month: 'Março', year: 2024 },
  { id: 'exp8', category: 'Travel', amount: 900, month: 'Março', year: 2024 },
  { id: 'exp9', category: 'Personnel', amount: 5000, month: 'Março', year: 2024 },
];

export const activities: Activity[] = [
  { id: 'act1', date: '2024-01-10', description: 'Votação Projeto X', type: 'voting', result: 'approved', link: '#' },
  { id: 'act2', date: '2024-01-15', description: 'Reunião com moradores', type: 'meeting' },
  { id: 'act3', date: '2024-02-01', description: 'Sessão Plenária', type: 'voting', result: 'present', link: '#' },
  { id: 'act4', date: '2024-02-20', description: 'Participação em evento Y', type: 'event' },
  { id: 'act5', date: '2024-03-05', description: 'Votação Emenda Z', type: 'voting', result: 'rejected', link: '#' },
  { id: 'act6', date: '2024-03-12', description: 'Audiência Pública', type: 'meeting' },
];

export const projects: Project[] = [
  { id: 'proj1', title: 'Lei de Incentivo à Tecnologia', status: 'approved', summary: 'Cria incentivos fiscais para empresas de tecnologia.', proposer: 'Rafa Munhoz' },
  { id: 'proj2', title: 'Programa de Reciclagem Urbana', status: 'in_progress', summary: 'Implementa pontos de coleta seletiva em toda a cidade.', proposer: 'Rafa Munhoz' },
  { id: 'proj3', title: 'Reforma do Sistema de Saúde', status: 'proposed', summary: 'Propõe melhorias na gestão e atendimento dos hospitais públicos.', proposer: 'Rafa Munhoz' },
];
