
const array1 = [9, 17, 23, 5];
let resultarr1 = array1.filter(item => item > 10)
console.log(resultarr1)

const array2 = [1, 2, 3, 4];
let resultarr2 = array2.filter(item => item % 2 !== 0)
console.log(resultarr2)

const array3 = [1, '1', 2, {}];
let resultarr3 = array3.filter(item => typeof item === 'number')
console.log(resultarr3)

const array4 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
let resultarr4 = array4.filter(item => item.length > 6)
console.log(resultarr4)

