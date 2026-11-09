# AGENTS.md

## Visão geral

Projeto de estudo em Next.js (App Router) com React. O conteúdo e a interface são em português (`lang="pt-BR"`). Hoje é uma única página que lista nomes de macacos a partir de um array fixo, sem backend nem banco de dados.

## Estrutura

- `app/page.js`: página principal.
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
