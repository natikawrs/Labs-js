let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

let paper = {
  max: arr[0],
  min: arr[0]
};

let summary = arr.reduce((acc, item) => {
  acc.max = acc.max < item ? item : acc.max;
  acc.min = acc.min > item ? item : acc.min;

  return acc;
}, paper);

console.log(summary);
