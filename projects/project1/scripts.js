const item1 = document.querySelector('.item1')
const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')


arrowBtn.addEventListener('click', ()=> item1.classList.toggle('hide'))

arrowBtn.addEventListener('click', ()=> arrowIcon.classList.toggle('rotate'))