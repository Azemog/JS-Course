const burgerBtn = document.querySelector('.burger')
const burgerIco = document.querySelector('.fa-bars')
const nav = document.querySelector('nav ul')
const xIco = document.querySelector('.fa-times')

const toggleNav = () =>{
   nav.classList.toggle('active')
   burgerBtn.classList.toggle('active')
   burgerIco.classList.toggle('hide')
   xIco.classList.toggle('hide')

}



burgerBtn.addEventListener('click', toggleNav)
