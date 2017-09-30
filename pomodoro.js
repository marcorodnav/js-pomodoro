(function () {
  'use strict';
  var Indicators = {
    init: function(){
      this.pomoI = document.querySelector('#pomoTime').parentElement.firstElementChild;
      this.breakI = document.querySelector('#breakTime').parentElement.firstElementChild;
    },
    turnPomoOn: function() {
      Indicators.pomoI.className = "timerActive";
      Indicators.breakI.classList.remove("timerActive");
    }, 
    turnBreakOn: function() {
      Indicators.breakI.className = 'timerActive';
      Indicators.pomoI.classList.remove('timerActive');
    },
    clearIndicators: function() {
      Indicators.breakI.classList.remove("timerActive");
      Indicators.pomoI.classList.remove('timerActive');
    }
  };
  Indicators.init();

  var Pomodoro = {
    init: function () {
      // this.pomoIndicator = document.querySelector('#pomoTime').parentElement.firstElementChild;
      // this.breakIndicator = document.querySelector('#breakTime').parentElement.firstElementChild;
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
      this.playTimer.addEventListener('click', this.startTimer, false);
      this.resetTimer.addEventListener('click', this.stopTimer, false);
    },
    validTime: function (time) {
      return time > 1;
    },
    incBreak: function () {
      let time = Number(breakTime.innerText);
      time += 1;
      breakTime.innerText = time;
    },
    decBreak: function () {
      let time = Number(breakTime.innerText);
      if (Pomodoro.validTime(time)) {
        time -= 1;
      }
      breakTime.innerText = time;
    },
    incPomo: function () {
      let time = Number(pomoTime.innerText);
      time += 1;
      pomoTime.innerText = time;
    },
    decPomo: function () {
      let time = Number(pomoTime.innerText);
      if (Pomodoro.validTime(time)) {
        time -= 1;
      }
      pomoTime.innerText = time;
    },
    startTimer: function() {
      Pomodoro.playTimer.removeEventListener('click',Pomodoro.startTimer);
      let minutesP = pomoTime.textContent;
      let minutesB = breakTime.textContent;
      let seconds = 59;
      let display = Pomodoro.timerDisplay;
      let stopFunction = Pomodoro.stopTimer;
      var timerFlag = Pomodoro.pomoFlag;
      let pomoIndicator = Indicators.turnPomoOn;
      let breakIndicator = Indicators.turnBreakOn;
      Pomodoro.pomodoroId = setInterval(function(){
        if (timerFlag) pomoIndicator(); else breakIndicator();
        let initialMP = minutesP;
        let initialMB = minutesB;
        let minutesT = parseInt((timerFlag ? minutesP : minutesB), 10);
        --minutesT;
        let secondsT = parseInt(seconds, 10);
        minutesT = minutesT < 10 ? '0' + minutesT : minutesT;
        secondsT = secondsT < 10 ? '0' + secondsT : secondsT;

        display.textContent = minutesT + ":" + secondsT;
        if (secondsT === 0 || secondsT === "00") {
          if (timerFlag) minutesP--; else minutesB--;
        } seconds--;

        if ((minutesT === 0 || minutesT === "00") && (secondsT === 0 || secondsT === "00")) {
          timerFlag = !timerFlag;
          seconds = 59;
          minutesP = initialMP;
          minutesB = initialMB;
        }
      }, 1000, minutesP, minutesB,seconds, display, timerFlag, pomoIndicator, breakIndicator);
    },
    stopTimer: function() {
      clearInterval(Pomodoro.pomodoroId);
      Indicators.clearIndicators();
      Pomodoro.timerDisplay.textContent = "00:00";
      Pomodoro.playTimer.addEventListener('click', Pomodoro.startTimer, false);
    }
  };

  Pomodoro.init();
})();
