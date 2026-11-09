# AGENTS.md

## Visão geral

Projeto de estudo em Next.js (App Router) com React. O conteúdo e a interface são em português (`lang="pt-BR"`). Hoje é uma única página "Em construção" para a reconstrução do TabNews do curso.dev com agentes de IA. Ela mostra o total de conteúdos publicados no TabNews, lido da API pública a cada acesso, e dispara confete ao carregar. Não há backend nem banco de dados próprios.

## Estrutura

- `app/page.js`: página principal (Server Component que busca o total na API do TabNews, sem cache).
- `app/confete.js`: Client Component com a animação de confete (`react-confetti`).
- `app/layout.js`: layout raiz e `metadata`.
- `app/globals.css`: estilos globais.

## Comandos

- `npm run dev`: servidor de desenvolvimento.
- `npm run build`: build de produção.
- `npm start`: roda o build de produção.

## Convenções

- Escreva textos de interface e mensagens em português.
- Os arquivos usam JavaScript (`.js`), não TypeScript.
- Estilos ficam em CSS global; não há biblioteca de estilos.

## Commits

Todo commit neste projeto deve seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/): `tipo(escopo opcional): descrição`, com tipos como `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci` e `chore`.
