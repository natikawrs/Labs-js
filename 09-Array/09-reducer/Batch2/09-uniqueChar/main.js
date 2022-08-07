let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

// let result = alphabets.reduce((acc,item) => {
// if (!acc.includes(item)){acc.push(item)}
// return acc
// },[])

// console.log(result)

let alphabets2 = new Set(alphabets);
console.log(alphabets2);
