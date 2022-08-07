
function Calculator(input1,input2) {
this.num1 = input1
this.num2 = input2
this.read = function () {
    console.log(input1, input2)}

this.sum = function () {
     console.log(input1 + input2)}
   
this.mul = function () {
        console.log(input1 * input2)};
}


let calculator = new Calculator (5,9)
console.log(calculator.num1)
console.log(calculator.num2)
calculator.read()
calculator.sum()
calculator.mul()

