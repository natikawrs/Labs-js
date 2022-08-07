let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];

const counts = {};

names.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});

console.log(counts);
