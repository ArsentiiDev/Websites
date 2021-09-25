const burger = document.querySelector('.main__nav__burger i')
const navBar = document.querySelector('.nav')
const closeBtn = document.querySelector('.nav__header')

burger.addEventListener('click', ()=> {
    navBar.classList.add('showNav')
})

closeBtn.addEventListener('click', ()=> {
    navBar.classList.remove('showNav')
})