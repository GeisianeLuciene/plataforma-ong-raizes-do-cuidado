// --- Lógica para o Menu Hambúrguer ---

// 1. Encontra o botão hambúrguer no HTML pelo nome da sua classe.
const menuHamburguer = document.querySelector('.menu-hamburguer');

// 2. Encontra a lista do menu principal no HTML.
const menuPrincipal = document.querySelector('.menu-principal');

// 3. Adiciona um "ouvinte de eventos": ele fica esperando por um clique no botão.
menuHamburguer.addEventListener('click', () => {
    // 4. A mágica acontece aqui!
    //    A cada clique, ele ADICIONA ou REMOVE a classe 'nav-aberta' do menu.
    menuPrincipal.classList.toggle('nav-aberta');
});