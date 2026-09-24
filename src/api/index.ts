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
    { label: 'Repositórios', value: '36', detail: 'Portfólio total no GitHub' },
    { label: 'Projetos públicos', value: '13', detail: 'Visíveis para a comunidade' },
    { label: 'Em desenvolvimento', value: '23', detail: 'Repositórios privados em evolução' }
  ],
  activity: 'Decisões técnicas que deixam o produto mais legível'
};

const projects: Project[] = [
  { name: 'Música Artificial', focus: 'Operação editorial assistida por agentes para conteúdo multiplataforma', technologies: ['Python', 'FastAPI', 'LangGraph', 'MCP'], status: 'Em construção', href: 'https://github.com/ebalbinodasilva/musica-artificial' },
  { name: 'LinkedIn AI Daily Posts', focus: 'Conteúdo, posicionamento e fila de publicação no LinkedIn', technologies: ['TypeScript', 'OAuth', 'MCP', 'Python'], status: 'Ativo', href: 'https://github.com/ebalbinodasilva/linkedin-ai-daily-posts' },
  { name: 'LifeOps Ecosystem', focus: 'Finanças, agenda e planejamento familiar orientados por dados', technologies: ['Product', 'Architecture', 'AI'], status: 'Em definição', href: 'https://github.com/ebalbinodasilva/lifeops-ecosystem' },
  { name: 'CBank App', focus: 'Operações multiplataforma de crédito de carbono', technologies: ['Kubernetes', 'APIs', 'Cloud'], status: 'Ecossistema', href: 'https://github.com/ebalbinodasilva/cbank_app' }
];

const stack: StackArea[] = [
  { area: 'Backend', title: 'Serviços e APIs evolutivos', technologies: 'Python · Kotlin · Java · TypeScript · FastAPI · Spring Boot', detail: 'Arquitetura de serviços · Contratos claros' },
  { area: 'Dados & IA', title: 'Decisões orientadas por dados', technologies: 'PostgreSQL · SQLite · LangGraph · MCP · OpenTelemetry', detail: 'Contexto observável · IA aplicada' },
  { area: 'Cloud & operação', title: 'Entrega e confiabilidade', technologies: 'Docker · Kubernetes · AWS · Azure · CI/CD', detail: 'Operação contínua · Automação' },
  { area: 'Qualidade', title: 'Comportamento real do sistema', technologies: 'Testes · contratos · rastreabilidade', detail: 'Feedback rápido · Confiança verificável' }
];
