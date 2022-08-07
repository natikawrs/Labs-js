let username = prompt("Enter username");
let password = prompt("password");

function login(username, password) {
  if (username === "admin" && password === "P@ssw0rd") {
    alert("Login Success");
  } else {
    alert("Login fail");
  }
}

console.log(login(username, password));
