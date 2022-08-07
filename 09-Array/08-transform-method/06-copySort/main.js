let arr = ["React", "Vue", "Angular"];
let copy = arr.slice();

let sort = function (a, b) {
  return a > b ? 1 : -1;
};

console.log(copy.sort(sort));
