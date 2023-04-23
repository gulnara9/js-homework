let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let incrementBtn = document.querySelector(".increment");
let incrementBtn2 = document.querySelector(".increment2");
let decrementBtn = document.querySelector(".decrement");
let result = document.getElementById("result");
let interval;
let counter = 0;
let bonus;
let inputValue;

startBtn.addEventListener("click", function () {
  interval = setInterval(() => {
    counter++;
    result.innerText = counter;
  }, 1000);
  startBtn.setAttribute("disabled", "true");
  stopBtn.removeAttribute("disabled");
  //   this.style.backgroundColor = "red";
});

incrementBtn2.addEventListener("click", function () {
  inputValue = Number(document.getElementById("increment2").value);
  bonus = inputValue + counter;
  counter=bonus;
  result.innerText = counter;
});
incrementBtn.addEventListener("click", function () {
  counter++;
  result.innerText = counter;
});

decrementBtn.addEventListener("click", function () {
  counter--;
  result.innerText = counter;
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
  startBtn.removeAttribute("disabled");
  this.setAttribute("disabled", "true");
});

resetBtn.addEventListener("click", function () {
  result.innerText = 0;
  counter = 0;
  clearInterval(interval);
});
