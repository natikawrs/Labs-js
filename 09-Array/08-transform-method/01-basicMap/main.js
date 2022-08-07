const array1 = [1, 2, 30, 400];
let result1 = array1.map((item) => item * 2);
console.log(result1);

const array2 = [1, 2, 3, 4];
let result2 = array2.map((item) => String(item));
console.log(result2);

const array3 = [1, "1", 2, {}];
let result3 = array3.map((item) => typeof item);
console.log(result3);

const array4 = ["apple", "banana", "orange"];
let result4 = array4.map((item) => item.toUpperCase(item));
console.log(result4);

const array5 = [1, 3, 4, 5, 6, 7, 8];
let result5 = array5.map((item) => {
  return item % 2 === 0 ? `odd` : `even`;
});
console.log(result5);

const array6 = [1, -3, 2, 8, -4, 5];
let result6 = array6.map((item) => Math.abs(item));
console.log(result6);

const array7 = [100, 200.25, 300.84, 400.3];
let result7 = array7.map((item) => item.toFixed(2));
console.log(result7);

// const array8 = [0, 5, 10, 7, 6, 5, 0];
// let result8 = array8.map (item => )
// console.log(result8)

// const array9 = [1, 16, 81, 256, 625, 1296];
// let result9 = array9.map (item => item.index)
// console.log(result9)

// const array13 = [
//     { name: 'apple', birth: '2000-01-01' },
//     { name: 'banana', birth: '1990-10-01' },
//     { name: 'watermelon', birth: '1985-12-01' }
//   ];
//   let result13 = array13.map (item => Math.abs(item))
//   console.log(result13)
