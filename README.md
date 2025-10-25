# Plataforma ONG "Raízes do Cuidado"

> Projeto acadêmico desenvolvido para a disciplina de Fundamentos da Web e Programação para Interfaces Web. O projeto consiste em um site institucional de 3 páginas, construído como uma SPA (Single Page Application) responsiva, utilizando HTML5, CSS3 e JavaScript puro.

**Status:** Desenvolvimento (Entrega III Concluída) ✔️

---

## 📝 Descrição do Projeto

Este projeto consiste na criação de uma plataforma web para a ONG fictícia "Raízes do Cuidado". O site funciona como uma **Single Page Application (SPA)**, onde o conteúdo é carregado dinamicamente sem recarregar a página, oferecendo uma experiência de usuário fluida e moderna.

-   **Fase I (HTML):** A estrutura semântica do site foi construída.
-   **Fase II (CSS):** A plataforma foi estilizada com CSS3, implementando um design system, componentes modernos e layout responsivo (mobile-first).
-   **Fase III (JavaScript):** O site foi transformado em uma SPA dinâmica, com roteamento de cliente e validação de formulário avançada.

## 💻 Tecnologias Utilizadas

-   **HTML5** (Semântico, Estrutura `<picture>`)
-   **CSS3** (Variáveis, Grid, Flexbox, Media Queries, Animações)
-   **JavaScript (ES6+)** (Manipulação do DOM, `fetch()`, `async/await`, History API, Módulos `import/export`)
-   **Google Fonts** para a tipografia.

## ✨ Features (Recursos)

-   ✅ **Arquitetura SPA (Single Page Application):** Navegação fluida sem recarregamento de página, gerenciada por um roteador JavaScript customizado.
-   ✅ **Roteamento de Cliente:** Uso da History API (`pushState`) para URLs limpas (ex: `/projetos`) e funcionalidade do botão "voltar" do navegador.
-   ✅ **Validação de Formulário Avançada:** Sistema de verificação de consistência de dados em tempo real, com mensagens de erro customizadas, que é carregado dinamicamente apenas na página de cadastro.
-   ✅ **Carregamento Dinâmico de Conteúdo:** O HTML das páginas é carregado assincronamente usando a API `fetch()`.
-   ✅ **Código JavaScript Modular:** O código é organizado em módulos (`router.js`, `form-validation.js`, `script.js`) que se comunicam via `import/export`.
-   ✅ **Layout Responsivo (Mobile-First):** O site se adapta perfeitamente de celulares a desktops.
-   ✅ **Menu Hambúrguer Interativo:** Menu de navegação que se fecha automaticamente após o clique em um link na SPA.
-   ✅ **Componentes Modernos:** Cards, botões com estados e formulários estilizados.
-   ✅ **Otimização de Imagens:** Uso da tag `<picture>` para servir imagens em formatos modernos (`.webp`) com fallback (`.jpg`).

## 🎯 Objetivos Concluídos por Entrega

#### Entrega I (HTML)
-   Estruturação com HTML5 Semântico.
-   Criação de formulário complexo com validação nativa.

#### Entrega II (CSS)
-   Desenvolvimento de um Design System com variáveis CSS.
-   Criação de leiautes responsivos com Grid e Flexbox.
-   Implementação de navegação interativa (menu hambúrguer).
-   Estilização de componentes (cards, botões, formulários).

#### Entrega III (JavaScript)
-   Implementação de um sistema de SPA básico.
-   Criação de um roteador para carregar "templates" HTML dinamicamente.
-   Implementação de um sistema de verificação de consistência de dados no formulário com mensagens de erro customizadas.
-   Organização do código JavaScript de forma modular.

## 🚀 Como Visualizar o Projeto

O projeto pode ser visualizado ao vivo através do link do GitHub Pages:

-   **Link do Site:** **[https://geisianeluciene.github.io/plataforma-ong-raizes-do-cuidado/](https://geisianeluciene.github.io/plataforma-ong-raizes-do-cuidado/)**

Para rodar localmente (necessário para a navegação SPA funcionar):
1.  Clone ou baixe o repositório.
2.  Instale a extensão **Live Server** no VS Code.
3.  Clique com o botão direito no `index.html` e selecione "Open with Live Server".

## ✒️ Autor

Projeto desenvolvido por **Geisiane Luciene**.

- **LinkedIn:** [Geisiane Luciene](https://www.linkedin.com/in/geisiane-luciene-a51536379/)
- **Email:** [lucienegeisiane9@gmail.com](mailto:lucienegeisiane9@gmail.com)



---
