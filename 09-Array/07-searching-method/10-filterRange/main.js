let arr = [1,2,3,4,5,6,7,8,9,10]

function find(array, a, b) {
let result = array.filter((item => item >= a && item <= b))
return result
}

console.log(find(arr,5,8))



    