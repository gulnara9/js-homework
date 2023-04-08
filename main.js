//1.Convert Age to Days
function calcAge(age) {
  return age * 365;
}
console.log(calcAge(20)); //7300
console.log(calcAge(65)); // 23725
console.log(calcAge(0)); //0

//2.Loop text
let jobName = "Front-end Developer";
for (let i = 1; i <= 19; i++) {
  console.log(jobName.slice(0, i));
}

//3.Sum of even numbers(e.g: 2,4,6...) in 10.
let sum = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log("sum",sum);

//4Multiply the odd numbers(e.g: 1,3,5...) in 17.
let multiply = 1;
for (let i = 0; i < 17; i++) {
  if (i % 2 != 0) {
    multiply *= i;
  }
}
console.log("multiply:",multiply);

//5.Multiply numbers between 10 and 18.
let multiply2 = 1;
for (let i = 0; i < 18; i++) {
  if (i > 10 && i < 18) {
    multiply2 *= i;
  }
}
console.log("multiply:",multiply2);

//6.Sum numbers between 17 and 30.
let sum2 = 0;
for (let i = 17; i < 30; i++) {
    if(i===19 || i===20){
        continue;
    }
 sum2+=i
}
console.log("sum:", sum2);

/*7.Sum of even numbers and assign this result a variable.
Sum of odd numbers and assign this result a variable.*/
let i=0
let sumOdd=0
let sumEven=0

while(i<10){
    if(i%2==0){
        sumEven+=i
    }
    else{
        sumOdd+=i
    }
    i++
}
console.log("sum of even:", sumEven)//20
console.log("sum of odd:", sumOdd)//25

//8.Find of even numbers(e.g: 2,4,6...) in 16. And every number to the power of 2.

for(i=1;i<=16;i++){
    if(i%2!=0){
        continue
    }
    
    console.log(i**2)
}