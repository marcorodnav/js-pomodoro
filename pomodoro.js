'use strict'
var breakTime = document.querySelector('#breakTime') 
var pomoTime = document.querySelector('#pomoTime')

const validTime = (time) => time > 1

const incBreak = () => {
  let time = Number(breakTime.innerText)
  time+=1
  breakTime.innerText = time
  console.log(time)
}

const decBreak = () => {
  let time = Number(breakTime.innerText)
  if(validTime(time))
    time-=1
  breakTime.innerText = time
  console.log(time)
}

const incPomo = () => {
  let time = Number(pomoTime.innerText)
  time += 1
  pomoTime.innerText = time
  console.log(time)
}

const decPomo = () => {
  let time = Number(pomoTime.innerText)
  if (validTime(time))
    time-=1
  pomoTime.innerText = time;
  console.log(time)
}

const plusBreak = document.querySelector('#plusMinBreak')
const minusBreak = document.querySelector('#minusMinBreak')
const plusPomo = document.querySelector('#plusMinPomo')
const minusPomo = document.querySelector('#minusMinPomo')

plusBreak.addEventListener('click', incBreak, false)
minusBreak.addEventListener('click', decBreak, false)

plusPomo.addEventListener('click', incPomo, false)
minusPomo.addEventListener('click', decPomo, false)

