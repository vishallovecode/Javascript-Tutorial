


let timer = 0;
function startTimerClosure () {
  let count = 0;
  return function (){
     timer =  setInterval(()=>{
        document.getElementById('timer').textContent = ++count;
      }, 1000)
  }
}
let counter = 0;
function startTimer() {
  timer = setInterval(()=>{
        document.getElementById('timer').textContent = ++counter;
      }, 1000)
      console.log(timer , 'timer')
}

function stopTimer(){
  clearInterval(timer)
}

function resetTimer() {
  counter = 0;
  clearInterval(timer)
  document.getElementById('timer').textContent = counter;

}
function main() {
  // first we need two button reference
const btnStart =  document.getElementById('start-btn')
const btnEnd =  document.getElementById('stop-btn');
const resetBtn  = document.getElementById('reset-btn')

const closureTimer =  startTimerClosure();
// btnStart.addEventListener('click', closureTimer)
btnStart.addEventListener('click', startTimer)
btnEnd.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)
}

main()