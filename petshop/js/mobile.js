const btnAbrirMenu = document.getElementById('btn-abrir-menu');
const btnFecharMenu = document.getElementById('btn-fechar-menu'); // Botão de fechar menu
const menuMobile = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay');

btnAbrirMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('abrir-menu');
    overlay.classList.toggle('ativo'); // Ativa/desativa o overlay
});

btnFecharMenu.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    overlay.classList.remove('ativo'); // Remove o overlay
});

overlay.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    overlay.classList.remove('ativo'); // Remove o overlay
});
