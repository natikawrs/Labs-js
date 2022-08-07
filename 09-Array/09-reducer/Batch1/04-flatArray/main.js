let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];

function flatArray(array) {
  let flattenArray = array.reduce((acc, item, index) => {
    acc.push(...item);
    return acc;
  }, []);
  return flattenArray;
}

console.log(flatArray(flattened));
