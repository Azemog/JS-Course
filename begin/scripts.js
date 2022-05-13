'use strict'

function w(something){
    console.log(something.toUpperCase())
}

// // // // alert("siema")

// // // // const name = 'Dawid'
// // // // const surname = 'Matraszek'
// // // // number = 2
// // // // var number
// // // // console.log(number)
// // // // console.log(`Moje imie to: ${name} \nNazwisko to: ${surname}`)

// // // // const firstName = 'Tomek'
// // // // let age = 12
// // // // age = 18
 
// // // // const favColor = 'niebieski'
// // // // const favMeal = 'schabowy'
 
// // // // let currentCar
// // // // currentCar = 'Audi'
 
// // // // let age2 = 24
// // // let favColor1 = 'czerwony'
// // // // console.log(favColor1.length)

// // // //console.log(favColor1.toUpperCase())

// // // const date = new Date()

// // // // console.log(date.toLocaleDateString('en'))

// // // const text1 = 'powiększ mnie!'
// // // const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
// // // const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// // // const text4 = 'sprawdź, czy zawieram słowo "czy"'
// // // const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// // // const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// // // const text7 = 'podziel, ten, string, od, przecinków'

// // // console.log(text1.toUpperCase())

// // // console.log(text2.toLowerCase())

// // // console.log(text3.slice(6))

// // // console.log(text4.includes('czy'))

// // // console.log(text5.charAt(2))

// // // console.log(text6.replaceAll('pies', 'kot'))

// // // console.log(text7.split(","))

// // // const char = favColor1.charAt(0)

//console.log(favColor1.slice(1))


// // test()

// // function test(){
// //     console.log("message")
// // }

// // const person = {
// //     name: 'Klaudia',
// //     surname: 'Kraczwyk'
// // }


// let x=50,y=30

// if( x > y){
//     console.log(`${x} jest wieksze od ${y}`)
// }

// const color = 'blue'
// const newColor = 'green'

// if(color === newColor){
//     w('Kolory sie zgadaja')
// }else{
//     w('Kolory sie nie zgadzaja')
// }

// const x = 10

// x % 2 === 0 ? w('jest parzysta') : w('nie jest przysta')

// const x = 50
// if(x >= 100){
//     w('X>100')
// }else if(x < 100 && x > 30){
//     w('X jest sredniakiem')
// }else{
//     w('x jest maly')
// }

// const array =[1,3,5,7,9]

// for(const value of array){
//     let write = value*2
//     w(write.toString())
// }

// let x = 0

// while(x <= 9){
//     x+=2
//     console.log(x)
   
// }

// let x = 20

// do{
//     x-=3
// }while(x > 0)

// console.log(x)

// const array =[5,8,10,23,48,60]

// for(const value of array){
//     if(value % 2 === 0){
//         console.log(`%cLiczba ${value} jest parzysta.`, `background: tomato; color: black`)
//     }else{
//         console.log(`%cLiczba ${value} jest nieparzysta.`,'background: gold; color: black')
//     }
// }

// const array = [1,2,3,4,5,6,7,8,9]
// function incrase(value){
//     return value + 4
// }

// const newArray = array.map(incrase)

// console.log(newArray)

// const superArray = newArray.concat(array)
// console.log(superArray)

// const drinks = ['pepsi', 'fanta', 'tymbark']
// const meals =['schabowy', 'spaghetti', 'kanapka']

// const menu = [...drinks,...meals]
// console.log(menu)

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(0,2)
// const numbers3 = numbers.slice(-3,numbers.length)
// console.log(numbers2)
// console.log(numbers3)

// randomStuff = colors.splice(3,2)
// console.log(randomStuff)

// newCars = cars.splice(2,4,'test')
// console.log(cars)
// console.log(newCars)

// const letters = ['c','d']
// letters.unshift('a','b')
// letters.push('e','f')
// console.log(letters)
// if(letters.includes('c')){
//     console.log('cos znaleziono')
// }
// const array = [1,5,13,26,48]
// const newArray = array.map(el => multiply(el))
// //newArray.forEach(el => console.log(el))
// function multiply(el){
//     return el*5
// }
// console.log(newArray)

// newArray.forEach(el => console.log(even(el)))

// function even(el){
//     if(el%2 === 0 )
//     return `Liczba parzysta to ${el}`
//     else{
//     return `Liczba nieparzysta to ${el}`
//     }
// }

// const colors = ['green']

// colors.push('yellow')
// colors.unshift('blue')

// for(el of colors){
//     let first = el.charAt(0).toUpperCase()
//     let second = el.slice(1)
//     console.log(`moj ulubiony kolor to: ${first}${second}`)
// }

// const cars ="Audi,Mercedes,BMW,Nissan,Dodge"
// const carsArray = cars.split(',')
// console.log(carsArray)

// carsArray.length > 3 ? console.log('jest ok') : console.log('nie jest ok')

// carsArray.includes('Audi') ? carsArray.push('Fiat') : carsArray.pop()

// console.log(carsArray)

// const test = name => console.log(`moje imie to: ${name}`)

// const test2 = (name,age) => console.log(`moje imie to: ${name} i mam ${age} lat`)

// test2('dawid', 21)

// console.log(name);

// const F1 = num => console.log(`Liczba ${num} jest parzysta`);
// const F2 = num => console.log(`Liczba ${num} jest nieparzysta`);
// const add = (num1, num2 ) => {
//     const score = num1 + num2
//     score % 2 === 0  ? F1(score) : F2(score)
// }
 
// add(10,11)

// let celsius = 10

// const fahrenheit = num => num*1.8+32

// const temp = fahrenheit(celsius)

// console.log(`${celsius}\u00B0C = ${temp}\u00B0F`)

// let num = 10
// let numbers = []

// for(let i = 0; i< num; i++){
//     numbers.push(i);
// }

// const fun = num =>{
//     num % 3 === 0 && num !== 0 ? console.log(`${num} jest podzielne przez 3`) : console.log(`${num} nie jest podzielne przez 3 lub ${num} = 0`);
// }

// numbers.forEach(fun)

// const test = document.getElementById('id')
// console.log(test)
// const test2 = document.getElementsByTagName('li')
// console.log(test2);
// const test3 = document.getElementsByClassName('test')
// console.log(test3);

// const test = document.querySelector('#item')
// console.log(test);
// const test2 = document.querySelectorAll('.test')
// console.log(test2);

// w3 = window.op

// const heading = document.querySelector('h1')
// const pArray = document.querySelectorAll('p')
// const divClass = document.querySelector('div.test')
// const divClass1 = divClass.querySelector('p')
// console.log(heading);
// console.log(pArray);
// console.log(divClass);
// console.log(divClass1);

// const ulList = document.createElement('ul')
// const liItem = document.createElement('li')
// liItem.textContent= 'czesc'

// document.body.appendChild(ulList)
// ulList.appendChild(liItem )

// const div = document.querySelector('div')
// const p = document.createElement('p')
// p.textContent = 'I am a paragraf'
// div.appendChild(p)

// // div.removeChild(p)
// // document.body.removeChild(div)

// p.remove()
// div.remove()

const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')

// btn1.addEventListener('click', function () {console.log('kliknieto mnie EGO')})
// btn2.addEventListener('mouseover', () => alert("najs"))

// const test = () => console.log("Double Click");
// btn3.addEventListener('dblclick', test)

// const btns = document.querySelectorAll('button')

// const smile = () => console.log('☺'); 

// btns.forEach(btn => btn.addEventListener('mouseover', smile))


    // const text = (e) => {

    //     console.log(e.target)
    //     console.log(e.target.classList);
    //     console.log(e.target.offSetTop);
    // }

    // btn1.addEventListener('click', test)


// const lime = document.querySelector('.lime')
// const blue = document.querySelector('.blue')
// const yellow = document.querySelector('.yellow')

// const infoLime = () => {
   
//     console.log(`%c lime`, `color:lawngreen; text-transform:uppercase`)
// }

// const infoBlue = (e) => {
//     e.stopPropagation(e)
//     console.log(`%c blue`,`color:blue; text-transform:uppercase`)}
// const infoYellow = () =>{
   
// console.log(`%c yellow`,`color:yellow; text-transform:uppercase`)}

// lime.addEventListener('click',infoLime)
// blue.addEventListener('click',infoBlue)
// yellow.addEventListener('click',infoYellow)

// const circles = document.querySelectorAll(".circle")
// const lime = document.querySelector('.lime') 
// const blue = document.querySelector('.blue')
// const gold = document.querySelector('.yellow')
// const newCircle = document.createElement('div')
// newCircle.classList.add('circle','purple')
// gold.append(newCircle)  
// circles.forEach(e => e.addEventListener('click', () => console.log(e)))




// blue.addEventListener('click', (e) => {
//     if(e.target.classList.contains('circle2')){
//         console.log(e.target);
//     }
    
// })

const ulList = document.createElement('ul')
document.body.append(ulList)
for(let i = 0; i< 10; i++){
    const li = document.createElement('li')
    li.textContent = `${i+1}`
    ulList.append(li)
}
const liList = document.querySelectorAll('li')
const lastLi =  liList[liList.length-1]
lastLi.textContent = 'Jestem ostatnim elementem.'
lastLi.classList.add('lastLi')

