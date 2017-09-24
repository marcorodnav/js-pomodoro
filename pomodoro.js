'use strict'
var breakTime = document.querySelector('#breakTime')
var pomoTime = document.querySelector('#pomoTime')
var timerDisplay = document.querySelector('#timer')
var pomodoroId
var pomoFlag = true

const validTime = (time) => time > 1

const incBreak = () => {
  let time = Number(breakTime.innerText)
  time += 1
  breakTime.innerText = time
  console.log(time)
}

const decBreak = () => {
  let time = Number(breakTime.innerText)
  if (validTime(time))
    time -= 1
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
    time -= 1
  pomoTime.innerText = time;
  console.log(time)
}

const startTimer = () => {
  let duration = (pomoFlag) ? Number(pomoTime.textContent) : Number(breakTime.textContent)
  let display = timerDisplay
  
  clearInterval(pomodoroId)
  let timer = duration
  let minutes
  let seconds
  pomodoroId = setInterval(() => {
    if (--timer < 0)
      timer = duration

    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    display.textContent = minutes + ":" + seconds

    if (minutes == 0 && seconds == 0) {
      alert('Time finished')
      pomoFlag = false
    }
  }, 1000)
}

const stopTimer = () => clearInterval(pomodoroId)

const plusBreak = document.querySelector('#plusMinBreak')
const minusBreak = document.querySelector('#minusMinBreak')
const plusPomo = document.querySelector('#plusMinPomo')
const minusPomo = document.querySelector('#minusMinPomo')
const playTimer = document.querySelector('#playTimer')
const resetTimer = document.querySelector('#resetTimer')

plusBreak.addEventListener('click', incBreak, false)
minusBreak.addEventListener('click', decBreak, false)

plusPomo.addEventListener('click', incPomo, false)
minusPomo.addEventListener('click', decPomo, false)

playTimer.addEventListener('click', startTimer, false)
resetTimer.addEventListener('click', stopTimer, false)