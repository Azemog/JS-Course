'use strict'
const liList = document.querySelectorAll('li')


for(let i = 0 ; i < liList.length; i++){
    liList[i].textContent = i + 1
    liList[i].dataset.id = i + 1
}  

const thirdLi = document.querySelector('[data-id="3"]')
console.log(thirdLi);


console.log(thirdLi.closest('div'));


     





