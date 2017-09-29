(function () {
  'use strict';
  var Pomodoro = {
    init: function () {
      this.breakTime = document.querySelector('#breakTime');
      this.pomoTime = document.querySelector('#pomoTime');
      this.timerDisplay = document.querySelector('#timer');
      this.pomodoroId;
      this.pomoFlag = true;
      this.plusBreak = document.querySelector('#plusMinBreak');
      this.minusBreak = document.querySelector('#minusMinBreak');
      this.plusPomo = document.querySelector('#plusMinPomo');
      this.minusPomo = document.querySelector('#minusMinPomo');
      this.playTimer = document.querySelector('#playTimer');
      this.resetTimer = document.querySelector('#resetTimer');
      Pomodoro.bindEvents();
    },
    bindEvents: function () {
      this.plusBreak.addEventListener('click', this.incBreak, false);
      this.minusBreak.addEventListener('click', this.decBreak, false);
      this.plusPomo.addEventListener('click', this.incPomo, false);
      this.minusPomo.addEventListener('click', this.decPomo, false);
      this.playTimer.addEventListener('click', this.startTimer, false)
      this.resetTimer.addEventListener('click', this.stopTimer, false)
    },
    validTime: function (time) {
      return time > 1;
    },
    incBreak: function () {
      let time = Number(breakTime.innerText);
      time += 1;
      breakTime.innerText = time;
      console.log(time);
    },
    decBreak: function () {
      let time = Number(breakTime.innerText);
      if (Pomodoro.validTime(time)) {
        time -= 1;
      }
      breakTime.innerText = time;
      console.log(time);
    },
    incPomo: function () {
      let time = Number(pomoTime.innerText);
      time += 1;
      pomoTime.innerText = time;
      console.log(time);
    },
    decPomo: function () {
      let time = Number(pomoTime.innerText);
      if (Pomodoro.validTime(time)) {
        time -= 1;
      }
      pomoTime.innerText = time;
      console.log(time);
    },
    startTimer: function() {
      let minutesP = pomoTime.textContent;
      let minutesB = breakTime.textContent;
      let seconds = 59;
      let display = Pomodoro.timerDisplay;
      let stopFunction = Pomodoro.stopTimer;
      let timerFlag = Pomodoro.pomoFlag;
      Pomodoro.pomodoroId = setInterval(function(){
        let stop = stopFunction;
        let initialMP = minutesP;
        let initialMB = minutesB;
        let minutesT = parseInt((timerFlag ? minutesP : minutesB), 10);
        minutesT = minutesT === 1 ? 0 : minutesT;
        let secondsT = parseInt(seconds, 10);
        minutesT = minutesT < 10 ? '0' + minutesT : minutesT;
        secondsT = secondsT < 10 ? '0' + secondsT : secondsT;

        display.textContent = minutesT + ":" + secondsT;
        if (secondsT === 0 || secondsT === "00") {
          if (timerFlag) minutesP--; else minutesB--;
        } seconds--;

        if ((minutesT === 0 || minutesT === "00") && (secondsT === 0 || secondsT === "00")) {
          timerFlag = false;
          seconds = 59;
          minutesP = initialMP;
          minutesB = initialMB;
        }
        console.log("TimerDisplay: "+display.textContent);
      }, 1000, minutesP, minutesB,seconds, display, stopFunction, timerFlag);
    },
    stopTimer: function() {
      clearInterval(Pomodoro.pomodoroId);
      console.log("called");
      Pomodoro.timerDisplay.textContent = "00:00";
    }
  };

  Pomodoro.init();
})();

// const startTimer = () => {
//   let duration = (pomoFlag) ? Number(pomoTime.textContent) : Number(breakTime.textContent)
//   let display = timerDisplay

//   clearInterval(pomodoroId)
//   let timer = duration
//   let minutes
//   let seconds
//   pomodoroId = setInterval(() => {
//     if (--timer < 0)
//       timer = duration

//     minutes = parseInt(timer / 60, 10)
//     seconds = parseInt(timer % 60, 10)

//     minutes = minutes < 10 ? '0' + minutes : minutes
//     seconds = seconds < 10 ? '0' + seconds : seconds

//     display.textContent = minutes + ":" + seconds

//     if (minutes == 0 && seconds == 0) {
//       alert('Time finished')
//       pomoFlag = false
//     }
//   }, 1000)
// }

// const stopTimer = () => clearInterval(pomodoroId)

// plusBreak.addEventListener('click', incBreak, false)
// minusBreak.addEventListener('click', decBreak, false)

// plusPomo.addEventListener('click', incPomo, false)
// minusPomo.addEventListener('click', decPomo, false)

// playTimer.addEventListener('click', startTimer, false)
// resetTimer.addEventListener('click', stopTimer, false)