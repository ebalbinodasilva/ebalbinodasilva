import type { Profile, Project, StackArea } from '../data/profile';

export interface ApiClient {
  getProfile(): Promise<Profile>;
  getProjects(): Promise<Project[]>;
  getStack(): Promise<StackArea[]>;
}

const mockClient: ApiClient = {
  async getProfile() { return profile; },
  async getProjects() { return projects; },
  async getStack() { return stack; }
};

export const api: ApiClient = mockClient;

const profile: Profile = {
  name: 'Everton Silva',
  role: 'Software Engineer · Arquitetura · Liderança Técnica',
  summary: 'Transformo complexidade técnica em produtos claros, confiáveis e orientados a impacto.',
  metrics: [
    { label: 'Projetos em destaque', value: '3', detail: 'Música Artificial, LinkedIn AI Daily Posts e LifeOps' },
    { label: 'Frentes atuais', value: '5', detail: 'Arquitetura, plataformas, IA aplicada, workflows e liderança' },
    { label: 'Identidade técnica', value: 'Everton Silva', detail: 'Software Engineer · Arquitetura · Liderança Técnica' }
  ],
  activity: 'Decisões técnicas que deixam o produto mais legível'
};

const projects: Project[] = [
  { name: 'Música Artificial', focus: 'Operação editorial assistida por agentes para conteúdo multiplataforma', technologies: ['Python', 'FastAPI', 'LangGraph', 'MCP'], status: 'Em construção' },
  { name: 'LinkedIn AI Daily Posts', focus: 'Conteúdo, posicionamento e fila de publicação no LinkedIn', technologies: ['TypeScript', 'OAuth', 'MCP', 'Python'], status: 'Ativo' },
  { name: 'LifeOps Ecosystem', focus: 'Finanças, agenda e planejamento familiar orientados por dados', technologies: ['Product', 'Architecture', 'AI'], status: 'Em definição' },
  { name: 'CBank App', focus: 'Operações multiplataforma de crédito de carbono', technologies: ['Kubernetes', 'APIs', 'Cloud'], status: 'Ecossistema' }
];

const stack: StackArea[] = [
  { area: 'Backend', title: 'Serviços e APIs evolutivos', technologies: 'Python · Kotlin · Java · TypeScript · FastAPI · Spring Boot', detail: 'Arquitetura de serviços · Contratos claros' },
  { area: 'Dados & IA', title: 'Decisões orientadas por dados', technologies: 'PostgreSQL · SQLite · LangGraph · MCP · OpenTelemetry', detail: 'Contexto observável · IA aplicada' },
  { area: 'Cloud & operação', title: 'Entrega e confiabilidade', technologies: 'Docker · Kubernetes · AWS · Azure · CI/CD', detail: 'Operação contínua · Automação' },
  { area: 'Qualidade', title: 'Comportamento real do sistema', technologies: 'Testes · contratos · rastreabilidade', detail: 'Feedback rápido · Confiança verificável' }
];