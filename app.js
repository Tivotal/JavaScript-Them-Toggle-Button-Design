/* Created by Tivotal */

let button = document.querySelector(".button");
let body = document.querySelector("body");

button.addEventListener("click", () => {
  body.classList.toggle("dark");
});
