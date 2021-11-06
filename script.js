const menuBars = document.querySelector('.menu-bars');
const menuItems = document.querySelector('.menu-items');


menuBars.addEventListener('click', () => {
    console.log(menuBars.children[0]);
    menuBars.children[0].classList.toggle('fa-bars');
    menuBars.children[0].classList.toggle('fa-times');
    menuItems.style.display = menuItems.style.display === 'flex' ? 'none' : 'flex';
    menuItems.classList.toggle('mobile-control');
    menuBars.parentElement.classList.toggle('mobile-model');
});

