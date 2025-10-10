# Magazord React Test (Front-end)

### 🌐 [Acesse o projeto em produção](https://magazord-react-test.vercel.app)

## Sobre o Projeto

Esse projeto foi desenvolvido para centralizar e exibir informações de um perfil de usuário do Github, incluindo repositórios, favoritos, issues e demais detalhes.

O foco principal do desenvolvimento foi garantir:

- **Fidelidade visual** ao design do Figma
- **Performance e responsividade** em toda a aplicação
- **Código limpo e escalável**, com separação clara de funções, componentes e diferentes camadas
- **Gerenciamento eficiente do estado e cache**, utilizando **Zustand** e **React Query**
- **Melhor experiência de navegação**, evitando re-renderizações desnecessárias

---

## ⚙️ Stack Utilizada

A stack foi escolhida conforme os requisitos do desafio e com o intuito de cobrir as necessidades durante o desenvolvimento do projeto.

- **React**: Biblioteca para a criação de interfaces reativas e componentizadas
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática
- **Vite**: Ferramenta de build moderna
- **TailwindCSS**: Framework utilitário de CSS que permite estilização rápida e diretamente nas classes
- **Zustand**: Biblioteca para gerenciamento de estado global, utilizado para controlar o estado da aplicação
- **React Query (Tanstack)**: Gerenciamento de requisições assíncronas, controle de cache e sincronização de dados com a API do Github
- **Axios**: Cliente HTTP simples e eficiente para comunicação com a API do Github
- **ShadCN UI**: Biblioteca de componentes acessíveis e estilizados com Tailwind, utilizado para alguns componentes da aplicação (Drawer e Popover)
- **SVGR Icons**: Utilizado para convertes ícones exportados do Figma diretamente em componentes React, mantendo a fidelidade ao layout original
- **ESLint**: Ferramenta de linting para identificar e corrigir problemas no código, garantindo consistência
- **Prettier**: Formatador de código automático utilizado em conjunto com o ESLint
- **Vercel**: Plataforma de deploy e hospedagem moderna, utilizada para públicar o projeto em produção

## 🔧 Como rodar o projeto

### Pré-requisitos

- **Node.js** >= 18.0.0
- **npm ou yarn** instalados globalmente

### Passos

# 1. Clonar o repositório:

```bash
    git clone https://github.com/CristopherMartarello/magazord-react-test.git
```

# 2. Entrar na pasta do projeto e na branch main:

```bash
    cd magazord-react-test
    git checkout main
```

# 3. Instale as dependências necessárias:

```bash
    npm install
```

# 4. Criar um arquivo .env com as variáveis de ambiente:

```bash
    VITE_GITHUB_API_URL=https://api.github.com
    VITE_GITHUB_USERNAME=seu_usuario
```

# 5. Rode o projeto em modo desenvolvimento:

```bash
    npm run dev
```

Acesse o projeto em: `http://localhost:5173`

## 🧩 Estrutura de pastas

```bash
src/
 ├── assets/           # Ícones e imagens (inclui ícones renderizados via SVGR)
 ├── components/       # Componentes reutilizáveis e UI base (FilterButton, Tabs, RepoItem, etc.)
 ├── constants/        # Listas e constantes globais (githubFilter.ts)
 ├── hooks/            # Hooks customizados (useGithubUser, useGithubSocials, etc.)
 ├── lib/              # Configuração de arquivos de bibliotecas (axios.ts, queryClient.ts, router.tsx, etc.)
 ├── pages/            # Páginas principais (Home.tsx, RepoDetails.tsx)
 ├── services/         # Integrações com a API do GitHub via Axios (githubService.ts)
 ├── store/            # Estado global com Zustand Store (githubStore.ts)
 ├── types/            # Tipagens TypeScript (github.d.ts)
 ├── utils/            # Funções auxiliares reutilizáveis (formatações e filtros)
 ├── index.css         # Configuraões globais de estilo
 └── main.tsx          # Inicialização do React + QueryClient + Provider (entry point)
```

## 🧠 Decisões técnicas

- **Gerenciamento de cache com React Query**: Evita requisições repetidas desnecessárias, melhora o tempo de resposta e mantém os dados atualizados com staleTime controlado (5 minutos).
- **Zustand para controle de Estado Global**: Escolhido pelo requisito do desafio e pela simplicidade/performance de gerenciamento.
- **Componentização modular**: Componentes independentes e reutilizáveis (FilterDropdown, FilterButton, Spinner, RepoItem, IssueItem, etc.) garantindo manutenção facilitada.
- **Responsividade**: Layout fluido, com breakpoints personalizados (mobile-l) e ajustados para diferentes tamanhos de tela.
- **SVGs com SVGR**: Permitiram o uso de ícones originais do Figma como componentes React, preservando o design e mantendo performance.

## 🎯 Desafios enfrentados

Durante o desenvolvimento da aplicação diversos desafios surgiram, tanto de cunho técnico quanto de usabilidade. Abaixo estão os principais e como foram superados:

### 1. Responsividade e fidelidade ao Figma

Um dos maiores desafios foi ajustar o layout para que se mantivesse fiel ao design do Figma, respeitando proporções, espaçamentos, cores, fontes, tamanhos e comportamento em diferentes breakpoints.

Para atingir esse resultado foquei em alguns pontos:

- Foram aplicadas classes utilitárias personalizadas (`mobile-l`) no Tailwind e, além disso, optei por utilizar diretamente os breakpoints para para corrigir desalinhamentos sutis entre ícones, textos e espaçamentos, garantindo a responsividade entre diferentes dispostivios (sm, md, lg...);
- A paleta de cores foi cuidadosamente adaptada, mantendo tons consistentes das cores presentes no protótipo.

O resultado foi uma experiência fluida e fiel tanto em dispositivos móveis quanto em telas grandes, respeitando o protótipo inicial.

---

### 2. Lógica de filtragem de repositórios

Para possibilitar a filtragem dinâmica por **tipo**, **linguagem** e **termo de busca**, foi criada uma função utilitária responsável por aplicar todos os filtros combinados de forma eficiente.  
A função foi criada em `utils/filterRepositories.ts` e foi escrita dessa maneira:

```typescript
import type { GithubRepo } from "@/types/github";

export const filterRepositories = (
  repos: GithubRepo[],
  types: string[] = [],
  languages: string[] = [],
  searchTerm: string = ""
) => {
  let reposFiltered = repos;

  const hasLanguageFilter = languages.length > 0 && !languages.includes("All");
  const hasTypeFilter = types.length > 0 && !types.includes("All");
  const hasSearchTerm = searchTerm.trim().length > 0;

  if (hasLanguageFilter) {
    reposFiltered = reposFiltered.filter(
      (repo) =>
        repo.language &&
        languages.some(
          (lang) => lang.toLowerCase() === repo.language?.toLowerCase()
        )
    );
  }

  if (hasTypeFilter) {
    reposFiltered = reposFiltered.filter((repo) =>
      types.some((type) => {
        const key = type.toLowerCase();
        return (
          (key === "sources" &&
            !repo.fork &&
            !repo.archived &&
            !repo.mirror_url) ||
          (key === "forks" && repo.fork) ||
          (key === "archived" && repo.archived) ||
          (key === "mirrors" && repo.mirror_url)
        );
      })
    );
  }

  if (hasSearchTerm) {
    reposFiltered = reposFiltered.filter(
      (repo) =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return reposFiltered;
};
```

Essa função foi criada para evitar **múltiplos loops** ou condições duplicadas dentro do componente, extraindo a lógica para um único local e sendo reutilizável. Através dessa função, é possível combinar diversos filtros e retornar a lista filtrada.

### 3. Performance e memoização da filtragem

Como a lista de repositórios é renderizada várias vezes por causa da mudança constante de filtros e de buscas, foi necessário memoizar o resultado da filtragem.

Sem a memoização, os filtros seriam recalculados em cada render do componente RepoList, gerando processamentos desnecessários.

Para resolver isso, utilizei a função useMemo do React, garantindo que a filtragem só ocorra quando houver mudança em alguma das dependências (repos, repoType, language, searchTerm):

```typescript
const filteredRepos = useMemo(() => {
  return filterRepositories(repos, repoType, language, searchTerm);
}, [repos, repoType, language, searchTerm]);
```

### 4. Integração entre Popover e componentes customizados

Para criar o Dropdown/Popover, utilizei a biblioteca ShadCN UI. Essa biblioteca utiliza o forwardRef para controlar as referências internas dos triggers de abertura desses componentes, o que acabava por quebrar o botão personalizado que eu estava tentando aninhar (FilterButton), resultando no não clique e na não execução correta da ação.

Inicialmente, o Popover não abria corretamente pois não recebia a ref do botão personalizado.

Para resolver isso, foi necessário refatorar o componente FilterButton para também aceitar referências via forwardRef.

Essa refatoração permitiu a passagem automática da referência para o **<button>** que se encontra dentro do FilterButton, aí o Popover foi capaz de aplicar o trigger nele e abrir corretamente.

### 5. Reutilização de componentes

Durante o desenvolvimento dos filtros, percebi a repetição de lógica entre o FilterDrawer(mobile) e o FilterDropdown(desktop).
A solução foi criar o componente **FilterCheckboxItem** reutilizável, centralizando toda a lógica de renderização dos checkboxes e das opções de filtro dentro dele.

Essa abstração melhorou a reusabilidade e manutenção, reduzindo códigos duplicados.

## 📐 Arquitetura e Boas Práticas

Durante o desenvolvimento, o foco foi manter o código limpo e escalável, priorizando clareza e reusabilidade. Para isso, adotei alguns passos importantes ao longo de toda a aplicação:

- **Commits semânticos**: Nos commits, utilizei o princípio dos Conventional Commits para padronizar as mensagens e alterações realizadas. Alinhei também esse conceito com o uso do Git Commit Message Linter juntamente com o Husky, para validar as mensagens de commit antes de subir de fato as alterações.

- **Padronização de código**: Utilizei ESLint + Prettier com Tailwind plugin para padronizar a ordem das classes e formatação do código.

- **Desenvolvimento em Branches**: Utilizei algumas branches para separar o desenvolvimento de novas features e atualizações. (feat/repo-details, feat/reponsiveness).

- **Separação de responsabilidades (Single Responsibility Principle - SOLID)**: Cada camada da aplicação possui uma responsabilidade bem definida (services, hooks, store, components). Além disso, esse princípio também foi aplicado aos componentes/funções da aplicação, onde cada responsabilidade está bem definida e dividida entre eles.

- **KISS**: Optei sempre pela simplicidade, soluções diretas, legíveis e de fácil entedimento.

- **DRY**: Me embasei nesse conceito para aumentar a lógica compartilhada e reusabilidade de código na minha aplicação. Por exemplo, a lógica compartilhada entre o FilterDrawer e o FilterDropdown foi extraída para um **componente reutilizável (FilterCheckboxItem)**.

- **Early Returns**: Foram aplicadas práticas de **Early Returns** (retornos), especialmente em componentes que lidam com estados de carregamento ou erro:

```typescript
  if (isRepoLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner />
      </div>
    );

  if (isRepoError)
    return (
      <div className="text-error flex h-screen w-full items-center justify-center">
        Falha ao carregar Repositório...
      </div>
    );
```

- **Custom Hooks Pattern**: Criação de hooks customizados e reutilizáveis para encapsular chamadas de API (ex: `useGithubUser`, `useGithubSocials`).

- **Singleton Pattern**: Aplicado tanto ao Zustand Store quanto à instância Axios, garantindo uma única fonte de verdade (instância) para estado global e requisições HTTP.

---

## 👨‍💻 Autor

**Cristopher Martarello Derossi**  
📍 Desenvolvedor Frontend - React

🔗 [LinkedIn](https://www.linkedin.com/in/cristophermartarello)  
🔗 [Github](https://github.com/CristopherMartarello)

---

## 🙌 Agradecimento

Agradecimento especial à **Magazord** pela oportunidade de participar do processo seletivo e pela proposta do desafio técnico!
