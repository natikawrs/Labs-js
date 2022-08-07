let str = "I live in Thailand";
let str2 = str.toLowerCase();
let str3 = str2.split("");

const counts = {};

str3.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});

console.log(counts);
