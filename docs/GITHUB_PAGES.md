# GitHub Pages — Heulosofia Agent

## Objetivo

Publicar a interface web do Heulosofia Agent diretamente a partir deste repositório.

## Estrutura publicada

A interface está na raiz do projeto:

- `index.html` — aplicação web
- `assets/style.css` — identidade visual e layout
- `assets/app.js` — interação do chat

## Ativação no GitHub

No repositório, abra **Settings → Pages**.

Em **Build and deployment**, selecione **Deploy from a branch** e escolha:

- Branch: `main`
- Folder: `/ (root)`

Salve a configuração.

O GitHub Pages publicará o conteúdo estático da raiz. Alterações posteriores na fonte publicada serão implantadas automaticamente. Consulte a documentação oficial do GitHub para detalhes e disponibilidade. 

## URL esperada

`https://sayjinblackbelt.github.io/Heulosofia_Agent/`

## Arquitetura do chatbot

Esta etapa é deliberadamente dividida em duas partes:

### Front-end público

O GitHub Pages hospeda somente arquivos estáticos. Ele apresenta a interface, mensagens e componentes visuais.

### Back-end de IA

A conexão real com um modelo de IA deve ocorrer por um serviço de servidor separado. O navegador não deve receber uma chave privada de API.

O back-end será responsável por:

1. receber a pergunta;
2. aplicar o Prompt Mestre;
3. consultar a Base de Conhecimento Heulosófica;
4. gerar a resposta;
5. devolver somente o resultado ao navegador.

## Estado atual

**V0.1 — Interface:** pronta.

**V0.2 — IA conectada:** próxima etapa.

**V1.0 — Agente público:** após validação da base, segurança, respostas e fontes.
