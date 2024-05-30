let a = prompt("Birorta text kiriting...");
let b = prompt("Text ni rangini kiriting...");
let c = prompt("Fon ni rangini kiriting...");

let element = document.createElement("h1");
let text = document.createTextNode(a);

element.style.color = b;
element.style.textAlign = "center"
element.style.marginTop = "200px"

element.appendChild(text);

let main = document.querySelector("body");
main.appendChild(element);
main.style.backgroundColor = c;