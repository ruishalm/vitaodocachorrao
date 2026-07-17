interface AgendaItem {
  id: string;
  date: string; // YYYY-MM-DD
  time?: string; // HH:MM (opcional)
  title: string;
  description: string;
  location: string;
  type: 'public' | 'private' | 'event' | 'meeting';
}

export type { AgendaItem };

export const agenda: AgendaItem[] = [
  {
    id: 'ag1',
    date: '2024-07-20',
    time: '09:00',
    title: 'Reunião com lideranças comunitárias',
    description: 'Discussão sobre melhorias na infraestrutura do bairro Centro.',
    location: 'Câmara Municipal',
    type: 'public',
  },
  {
    id: 'ag2',
    date: '2024-07-20',
    time: '14:30',
    title: 'Visita à Escola Municipal P. Pedro',
    description: 'Acompanhamento do projeto "Educação Digital" e diálogo com a comunidade escolar.',
    location: 'Escola Municipal P. Pedro',
    type: 'public',
  },
  {
    id: 'ag3',
    date: '2024-07-22',
    time: '10:00',
    title: 'Audiência Pública sobre Meio Ambiente',
    description: 'Participação em debate sobre novas políticas de reciclagem e sustentabilidade.',
    location: 'Assembleia Legislativa',
    type: 'event',
  },
  {
    id: 'ag4',
    date: '2024-07-25',
    time: '16:00',
    title: 'Encontro com Empreendedores Locais',
    description: 'Debate sobre incentivos fiscais e oportunidades de desenvolvimento para pequenos negócios.',
    location: 'Associação Comercial',
    type: 'public',
  },
  {
    id: 'ag5',
    date: '2024-08-01',
    time: '11:30',
    title: 'Sessão Plenária',
    description: 'Participação em votações e debates importantes para o estado.',
    location: 'Assembleia Legislativa',
    type: 'public',
  },
];
