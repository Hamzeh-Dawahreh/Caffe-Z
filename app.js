let name = prompt("Let us know your name :-)");
let gender = prompt("What is your gender?");
let type;

while (gender != "male" && gender != "female") {
  gender = prompt("What is your gender?");
}
if (gender === "male") {
  alert("Hello Mr " + name);
} else if (gender === "female") {
  alert("Hello Ms " + name);
}
type = prompt("Do you need a hot or cold drink?");
let order = prompt("Can you write me your order?");

let array = [name, gender, type, order];
for (let index = 0; index < array.length; index++) {
  let element = array[index];
  console.log(element);
}
console.log(name + " orderd a " + order);
