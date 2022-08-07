let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, jo, jin];

console.log(arr);

function getAverageAge(arr) {
  let sumage = arr.reduce(function (acc, item) {
    let age = item.age;
    return acc + age;
  }, 0);
  return sumage;
}

getAverageAge(arr) / arr.length;

let everage = getAverageAge(arr) / arr.length;

console.log(everage);
