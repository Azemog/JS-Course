const colorBtn = document.querySelector('.color')
const sizeUpBtn = document.querySelector('.sizeUp')
const sizeDownBtn = document.querySelector('.sizeDown')
const p = document.querySelector('p')
let size = window.getComputedStyle(p).fontSize;

const randomColor = () =>{
    const color = Math.floor(Math.random()*16777215).toString(16);
    p.style.color = `#${color}`
}
const smallerFont = () =>{
    size = parseInt(size)
    if(size > 20){
    size-=2 
    }
    p.style.fontSize = `${size}px`
}
const biggerFont = () =>{
    size = parseInt(size)
    if(size < 50){
    size+=2 
    }
    p.style.fontSize = `${size}px`
}

colorBtn.addEventListener('click', randomColor)

sizeDownBtn.addEventListener('click', smallerFont)

sizeUpBtn.addEventListener('click', biggerFont)

