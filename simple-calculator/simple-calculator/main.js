let div = document.querySelector(".calculator");
let result = document.querySelector("#result");
let value1 = document.querySelector("#value1");
let value2 = document.querySelector("#value2");
let additionBtn = document.querySelector("#addition");
let substractBtn = document.querySelector("#substract");
let multiplyBtn = document.querySelector("#multiply");
let divisionBtn = document.querySelector("#division");
let resetBtn = document.querySelector("#reset");
result.innerHTML = 0;

//addition
additionBtn.addEventListener("click", function () {
  //   console.log("Button clicked");
  if (value1.value === "" || value2.value === "") {
    alert("Value is empty, please enter a value ");
  } else {
    let sum = parseFloat(value1.value) + parseFloat(value2.value);
    result.innerHTML = sum;
  }
});

// substract

substractBtn.addEventListener("click", function () {
  if (value1.value === "" || value2.value === "") {
    alert("Value is empty, please enter a value ");
  } else {
    let substract = parseFloat(value1.value) - parseFloat(value2.value);
    result.innerHTML = substract;
  }
});
//multiply
multiplyBtn.addEventListener("click", function () {
  if (value1.value === "" || value2.value === "") {
    alert("Value is empty, please enter a value ");
  } else {
    let multiply = +value1.value * +value2.value;
    result.innerHTML = multiply;
  }
});
// division
divisionBtn.addEventListener("click", function () {
  if (!isNumeric(value1.value) || !isNumeric(value2.value)) {
    alert("Please enter valid values");
    return;
  }
  if (value2.value === "0") {
    result.innerHTML = "Error";
    return;
  } else {
    let divide = parseFloat(value1.value) / parseFloat(value2.value);
    result.innerHTML = divide;
  }
});

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

// reset
resetBtn.addEventListener("click", function () {
  value1.value = "";
  value2.value = "";
  result.innerHTML = "0";
});
