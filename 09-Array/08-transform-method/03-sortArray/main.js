const arr = [11, 17, 23, 13, 7, 19];

let sort = function (a, b) {
  return a < b ? 1 : -1;
};

console.log(arr.sort(sort));
