import { inicializarValidacaoFormulario } from './form-validation.js';

/* ==========================================================================
   ROTEADOR DA SINGLE PAGE APPLICATION (SPA)
   ========================================================================== */

// 1. Mapeamento das Rotas:
// Dizemos ao roteador qual arquivo HTML corresponde a qual "caminho" (URL).
const routes = {
    '/': '/pages/inicio.html',
    '/projetos': '/pages/projetos.html',
    '/cadastro': '/pages/cadastro.html'
};

// 2. Função de Clique no Link (Handler de Navegação)
function handleNavigation(event) {
    // Impede que o navegador recarregue a página (o comportamento padrão do link)
    event.preventDefault();
    
    // Pega o caminho do link clicado (ex: "/projetos")
    const path = event.target.pathname;
    
    // Adiciona o novo caminho ao histórico do navegador e muda a URL na barra
    window.history.pushState({}, "", path);
    
    // Carrega o conteúdo da rota correspondente
    handleLocation();

    // Seleciona o menu principal
    const menuPrincipal = document.querySelector('.menu-principal');
    // Remove a classe 'nav-aberta' para fechar o menu
    menuPrincipal.classList.remove('nav-aberta');
}

// 3. Função Principal de Roteamento (Controla qual página carregar)
async function handleLocation() {
    // Pega o caminho atual da URL (ex: "/cadastro")
    const path = window.location.pathname;
    
    // Procura o arquivo HTML correspondente no nosso mapa 'routes'
    // Se não encontrar (ex: /pagina-que-nao-existe), usa a rota 404.
    const route = routes[path] || routes['404'];
    
    // Busca o conteúdo HTML do arquivo
    const html = await fetch(route).then(data => data.text());
    
    // Injeta o HTML dentro da nossa <main>
    const mainContent = document.querySelector('#conteudo-principal');
    mainContent.innerHTML = html;
    
    // --- LÓGICA ESPECIAL PÓS-CARREGAMENTO ---
if (path === '/cadastro') {
    // Chama a função que importamos
    // Ela vai rodar DEPOIS que o innerHTML já foi inserido.
    inicializarValidacaoFormulario();
}
}

// 4. Função Auxiliar para Carregar Scripts Dinamicamente
function loadScript(src) {
    // Remove o script antigo, se ele já existir (para evitar duplicatas)
    const oldScript = document.querySelector(`script[src="${src}"]`);
    if (oldScript) {
        oldScript.remove();
    }
    
    // Cria uma nova tag <script>
    const script = document.createElement('script');
    script.src = src;
    script.type = 'module'; // Pode ser 'module' ou 'text/javascript'
    // Adiciona o script ao final do <body>
    document.body.appendChild(script);
}

// 5. Configuração Inicial:
// Faz com que o "botão voltar" do navegador funcione
window.onpopstate = handleLocation;

// Captura todos os cliques nos links de navegação
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', handleNavigation);
});

// Carrega o conteúdo da página inicial assim que o site é aberto
handleLocation();
