///////////// 1.Return the First Element in an Array.
function getFirstValue(anyArr) {
  for (i = 0; i < anyArr.length; i++) {
    if (anyArr[i] != "number") {
      break;
    }
  }
  console.log(anyArr[0]);
}
getFirstValue([1, 2, 3]); // 1
getFirstValue([80, 5, 100]); // 80
getFirstValue([-500, 0, 50]); // -500

////////////// 2.Return the Last Element in an Array.
let arr1 = [1, 2, 3, 4, 5];
function getLastItem(arr) {
  return arr[arr.length - 1];
}
console.log(getLastItem([1, 2, 3])); //3
console.log(getLastItem(["cat", "dog", "duck"])); //duck
console.log(getLastItem([true, false, true])); //true

let lastItem = getLastItem(arr1);
console.log("last item:", lastItem); //last item:5

////////////// 3.Find the Index
let indexString = function (array, string) {
  return array.indexOf(string);
};
console.log(indexString([1, 2, 4, 5, "t", 6], "t"));
console.log(indexString(["hi", "edabit", "fgh", "abc"], "fgh")); // 2
console.log(indexString(["Red", "blue", "Blue", "Green"], "blue")); // 1
console.log(indexString(["a", "g", "y", "d"], "d")); // 3
console.log(
  indexString(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")
); //0
indexItem([1,5,8,9, "b", 3, 4, 7], "b");

//or
//function indexItem(arr, str) {
//  for (i = 0; i < arr.length; i++) {
//    if (arr[i] == str) {
//      return (i);
//    } else {
//      continue;
//    }
//  }
//}
//console.log(indexItem([1,5,8,9, "b", 3, 4, 7], "b"));
//we can also write the third task in this way

/////////////// 4.Return the Sum of Two Numbers.
let addition = function (a, b) {
  return a + b;
};
console.log("sum of 4 and 5:", addition(4, 5)); //9
console.log("sum of 3 and 2:", addition(3, 2)); //5
console.log("sum of -3 and -6:", addition(-3, -6)); //-9
console.log("sum of 7 and 3:", addition(7, 3)); //10

/////////////// 5.Less Than 100?
let lessThan100 = (a, b) => {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
};
console.log(lessThan100(45, 56)); //false
console.log(lessThan100(22, 15)); //true
console.log(lessThan100(83, 34)); //false
console.log(lessThan100(3, 77)); //true
//or
//const LessThan100 = (num1, num2) => num1 + num2 < 100;

//////////////// 6.Volume of a Box
let volumeOfBox = (width, length, height) => {
  return width * length * height;
};
console.log(volumeOfBox(2, 5, 1)); //10
console.log(volumeOfBox(4, 2, 2)); //16

///////////////// 7.Basketball Points
let points = (twoPointers, threePointers) => {
  return 2 * twoPointers + 3 * threePointers;
};
console.log("points:", points(38, 8));
console.log("points:", points(43, 10));

// 8.Create a function called 'fillInfo()', which is used to change "my name" to 'Ulfat' ,'my surname' to 'Zakirli', 'my city' to 'Baku'.
let arr5 = [
  {
    name: "gulnara",
    surname: "qaribova",
    city: "agdash",
  },
  {
    name: "gulnara",
    surname: "qaribova",
    city: "agdash",
  },
  {
    name: "gulnara",
    surname: "qaribova",
    city: "agdash",
  },
];
let updateInfo = [];
function fillInfo() {
  for (let obj of arr5) {
    if (obj.name === "gulnara") {
      obj.name = "ulfat";
    } if (obj.surname === "qaribova") {
      obj.surname = "zakirli";
    } if (obj.city === "agdash") {
      obj.city = "baku";
    }
  }
  return updateInfo.push(...arr5);
}
fillInfo();
console.log(updateInfo);

