const root = document.documentElement;
const body = document.querySelector('body')
const ul = document.querySelector('.ul')
const theme = document.querySelector('.theme')
const navIcon = document.querySelector('.nav-icon')
const th = document.querySelector('.th')
const toggle = document.querySelector('.toggle')
const ul_icon_toggle = document.querySelector('.ul-icon-toggle')

theme.addEventListener('click', function () {
    body.classList.toggle('drak')
    if (body.classList.contains('drak')) {
        th.classList.add('bi-brightness-low-fill')
        th.classList.remove('bi-moon')
        body.style.background = 'black'
        body.style.color = 'white'
        th.style.color = 'white'
        navIcon.style.color = 'white'
        root.style.setProperty('--navbar-bg-color','white')
        root.style.setProperty('--navbar-text-icon-color','black')
        root.style.setProperty('--header-shadow-color','0 0 10px white')
        root.style.setProperty('--toggle-theme-shadow-color','0 0 10px white, 0 0 20px white')
    } else {
        th.classList.remove('bi-brightness-low-fill')
        th.classList.add('bi-moon')
        body.style.background = 'white'
        body.style.color = 'black'
        th.style.color = 'black'
        navIcon.style.color = 'black'
        root.style.setProperty('--navbar-bg-color','black')
        root.style.setProperty('--navbar-bg-color','black')
        root.style.setProperty('--navbar-text-icon-color','white')
        root.style.setProperty('--header-shadow-color','0 0 10px black')
        root.style.setProperty('--toggle-theme-shadow-color','0 0 10px black, 0 0 20px black')
    }
});

function ulIconToggle() {
    ul_icon_toggle.classList.toggle('rotate180');
    ul.classList.toggle('ul-active')
}

function barToggle() {
    navIcon.classList.toggle('bi-x')
    ul.classList.toggle('nav-toggle')
}
