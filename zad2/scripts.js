'use strict'

const img = document.querySelector('img')

img.setAttribute('src', '/images/sad.jpg')
img.setAttribute('alt', 'Sad Hamilton')
const text = `jakis tekst`
const delay = (text) => console.log(text)

setTimeout(`delay(text)`, 2000)



