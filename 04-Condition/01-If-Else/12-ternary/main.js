let score = prompt('Enter Score')
let message1 = score >= 80 ? alert ('A')
: score >=70 && score <= 79 ? alert ('B')
: score  >=60 && score <= 69 ? alert ('C')
: score  >=50 && score <= 59 ? alert ('D')
:score < 50 ? alert ('F')
:alert('Invalid Data');
