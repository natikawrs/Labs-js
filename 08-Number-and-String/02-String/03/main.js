function ucFirst(str) {
let firstChar = str.slice (0,1)
let leftString = str.slice (1)

return firstChar.toUpperCase() + leftString
}
console.log(ucFirst("Hello it's me"))