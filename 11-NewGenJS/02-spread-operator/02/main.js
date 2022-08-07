arr = [1, 2, 3, 4, 5, 6, 7];
arr2 = [...arr];
function squar(arr) {
  return arr2.map((item, index) => (index === 3 ? item ** 2 : item));
}

console.log(squar(arr2));
