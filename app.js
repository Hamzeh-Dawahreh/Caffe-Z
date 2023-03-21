let name = prompt("Let us know your name :-)");
let age = prompt("How old are you?");
let gender = prompt("What is your gender?");
let type;
function gender1() {
  while (gender != "male" && gender != "female") {
    gender = prompt("What is your gender?");
  }
  if (gender === "male") {
    male = alert("Hello Mr " + name);
  } else if (gender === "female") {
    female = alert("Hello Ms " + name);
  }
}
gender1(gender);
type = prompt("Do you need a hot or cold drink?");
let order = prompt("Can you write me your order?");

let array = [name, gender, type, order];
for (let index = 0; index < array.length; index++) {
  let element = array[index];
  console.log(element);
}
console.log(name + " orderd a " + order);

let Customer = document.getElementById("hello");
let div = document.createElement("div");
let p = document.createElement("p");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

Customer.appendChild(div);
div.appendChild(p);
Customer.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
console.log(Customer);

p.textContent = name;
li1.textContent = `Gender: ${gender}`;

li2.textContent = `Age: ${age}`;
li3.textContent = `drink: ${type}  ${order}`;
