const paragrafs = document.querySelectorAll('p')
const burger = document.querySelector('.btn1')
const pizza = document.querySelector('.btn2')
const square = document.querySelector('div.square')


const fun1 = () => console.log('czesc');

const fun2 = (e) => e.target.style.backgroundColor = "red" 

const fun3 = (e) => e.target.style.backgroundColor = "blue"

const fun4 = () => paragrafs.forEach(element => {element.classList.toggle('show')});
   


burger.addEventListener('dblclick', fun1)
square.addEventListener('mouseenter', fun2)
square.addEventListener('mouseleave', fun3)
pizza.addEventListener('click', fun4)

