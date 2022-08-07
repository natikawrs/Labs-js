function checkAge(age) {
  let message;
  age >= 18
    ? (message = "Hello '${firstName} '${lasttName}'")
    : (message = "You cannot access.");

  console.log(message);
}

console.log(checkAge(10));

// function checkAge(firstName, lastName, age) {
//     let message;
//     [, , age] >= 18
//       ? (message = "Hello '${firstName} '${lasttName}'")
//       : (message = "You cannot access.");

//     console.log(message);
//   }

//   console.log(checkAge("mind", "mind1", 30));
