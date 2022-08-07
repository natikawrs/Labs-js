function mul(...args) {
  let result = 1;
  for (let arg of args) result *= arg;
  return result;
}

console.log(mul(1, 2, 3));
