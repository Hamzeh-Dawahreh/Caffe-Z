let name = prompt("Let us know your name :-)");
let gender = prompt("What is your gender?");

if (gender === "male") {
  alert("Hello Mr " + name);
} else if (gender === "female") {
  alert("Hello Ms " + name);
} else {
  alert("Welcome");
}
prompt("Do you need a hot or cold drink?");

let order = prompt("Can you write me your order?");

alert("Your drink is being prepared");

console.log(name + " orderd a " + order);
