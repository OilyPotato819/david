let mouseX = 0, pMouseX = 0;
let button = document.getElementById("btn");
let mouseXSpan = document.getElementById("mouseX");
let pMouseXSpan = document.getElementById("pMouseX");

document.getElementById("btn").addEventListener("click", mouseMoveHandler);

function mouseMoveHandler() {
  pMouseX = mouseX;
  mouseX++;
  mouseXSpan.innerHTML = mouseX;
  pMouseXSpan.innerHTML = pMouseX;
} 