//menu

const burger = document.querySelector('.main-menu__icon')
const menu = document.querySelector('.main-menu')
const body = document.body

if(burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('_lock')
    })
}