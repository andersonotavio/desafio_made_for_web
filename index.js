const menu = document.querySelector('.menu-hamburguer')

function toggleMenu(){
  const nav = document.querySelector('.header-m');
  nav.classList.toggle('ativo')
}

menu.addEventListener('click', toggleMenu)