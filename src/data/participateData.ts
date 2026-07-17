interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface Poll {
  id: string;
  question: string;
  description: string;
  options: PollOption[];
  status: 'active' | 'closed';
}

export type { PollOption, Poll };

export const polls: Poll[] = [
  {
    id: 'poll1',
    question: 'Qual área deve ser prioridade para investimentos?',
    description: 'Sua opinião é fundamental para definirmos onde concentrar nossos esforços e recursos nos próximos meses. Escolha a opção que você considera mais importante para o desenvolvimento de nossa comunidade.',
    options: [
      { id: 'opt1_1', text: 'Saúde Pública', votes: 150 },
      { id: 'opt1_2', text: 'Educação', votes: 200 },
      { id: 'opt1_3', text: 'Segurança', votes: 120 },
      { id: 'opt1_4', text: 'Infraestrutura', votes: 180 },
    ],
    status: 'active',
  },
  {
    id: 'poll2',
    question: 'Você apoia a implementação de ciclovias em nossa cidade?',
    description: 'Estamos avaliando a expansão da malha cicloviária. Sua resposta nos ajudará a tomar decisões que impactem positivamente a mobilidade urbana e a qualidade de vida.',
    options: [
      { id: 'opt2_1', text: 'Sim, totalmente', votes: 300 },
      { id: 'opt2_2', text: 'Sim, com ressalvas', votes: 80 },
      { id: 'opt2_3', text: 'Não, prefiro outras soluções', votes: 50 },
    ],
    status: 'active',
  },
  {
    id: 'poll3',
    question: 'O que você achou da recente lei de incentivo à cultura?',
    description: 'Queremos seu feedback sobre a lei X/2024 para a cultura, que visa apoiar artistas e eventos locais. Sua avaliação é crucial para futuras emendas e projetos.',
    options: [
      { id: 'opt3_1', text: 'Muito boa', votes: 90 },
      { id: 'opt3_2', text: 'Boa', votes: 60 },
      { id: 'opt3_3', text: 'Poderia ser melhor', votes: 30 },
      { id: 'opt3_4', text: 'Ruim', votes: 10 },
    ],
    status: 'closed', // Exemplo de enquete fechada
  },];
