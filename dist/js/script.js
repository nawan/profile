//Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector ('header');
    const fixedNav = header.offsetTop;
    const keatas = document.querySelector ('#keatas');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed'); 
        keatas.classList.remove('hidden');
        keatas.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        keatas.classList.remove('flex');
        keatas.classList.add('hidden');
    }
}


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
})

//remove hamburger
// window.addEventListener('click', function (e){
//     if (e.target != hamburger && e.target != navMenu) {
//         hamburger.classList.remove ('hamburger-active');
//         navMenu.classList.add('hidden');
//     }
// }) 

//dark mode toggle
const darkToggle = document.querySelector ('#dark-toggle');
const html = document.querySelector ('html');

darkToggle.addEventListener ('click', function(){
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

//toggler dark mode switcher

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}
