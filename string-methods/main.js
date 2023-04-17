//2.1
let text = "We are MERN-Stack developers";
let newText = text.replaceAll("MERN-Stack", "Front-end");
console.log(newText);
//2.2
let newText1 = text.toLocaleLowerCase().replaceAll("e", "a");
console.log(newText1);
//2.3
let text1 = " in Microsoft";
let newText2 = text.concat(text1);
console.log(newText2);
//2.4
let newArr = [];
text
  .split("")
  .map((el, index) =>
    el.toLocaleLowerCase() === "r" ? newArr.push(index) : newArr
  );
console.log(newArr);
//2.5
let newArr1 = [];
text.split("");
newArr1.push(text.toLocaleLowerCase().indexOf("r", 6));
console.log(newArr1);

//3
const arr3 = [
  {
    region: "Yasamal",
    area: 170,
  },

  {
    region: "Nizami",
    area: 20,
  },

  {
    region: "Nesimi",
    area: 10,
  },

  {
    region: "Sebail",
    area: 30,
  },
  {
    region: "Xetai",
    area: 30,
  },
];
const calcArea = (arr) => {
  let sum = 0;
  arr.forEach((item) => {
    if (item.region.length === 6) {
      sum += item.area;
    }
  });
  return sum;
};
console.log(calcArea(arr3))
//4
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]
arr4.sort((a, b) => a - b);
console.log(arr4)
//5
const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
console.log(arr5.flat(Infinity))
//6
const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']

colors.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

console.log(colors);

