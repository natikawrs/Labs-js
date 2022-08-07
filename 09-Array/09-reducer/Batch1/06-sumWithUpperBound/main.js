let str = "31 45 12 67 34 86 23 37 19 41";

let arrNum = str.split(" ");

let sum = arrNum.reduce(function (acc, item) {
  return item < 40 ? (acc += +item) : acc;
}, 0);

console.log(sum);
