var x = 1;
function func() {
  console.log(x); // *
  var x = 2;
}
console.log(func(x));
