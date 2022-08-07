let a = prompt ('enter1')
let b = prompt ('enter2')
let c = prompt ('enter3')

if (a > b && b > c) {alert (a+b+c)}
if (a > c && c > b) {alert (a+c+b)}
if (b > a && a > c) {alert (b+a+c)}
if (b > c && c > a) {alert (b+c+a)}
if (c > a && a > b) {alert (c+a+b)}
if (c > b && b > a) {alert (c+b+a)}