let number = +prompt("EnterNumber")
let sum = 0;
while (number) {
    digit = number % 10;
    sum += digit;
    number = (number - digit) / 10;
}
alert(sum);
