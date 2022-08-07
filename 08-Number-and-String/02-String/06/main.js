function extractCurrencyValue(string, rate) {
let convert = string.slice(1)*rate
return 'THB '+convert

}

console.log (extractCurrencyValue('$120', 30))