const arr = [
  { name: "John", age: 25 },
  { name: "Leon", age: 26 },
  { name: "Mick", age: 29 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 }
];

let sort = function (a, b) {
  return a.age - b.age > 0 ? 1 : -1;
};
console.log(arr.sort(sort));
