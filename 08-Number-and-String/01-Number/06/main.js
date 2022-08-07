function random (min,max){
let diff = Math.random() * (max - min)
return (min + diff).toFixed(2)

}

console.log(random(10,4))