const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const nums3 = [5, ...nums1, -6, -1, ...nums2];

const sum = nums3.reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);
