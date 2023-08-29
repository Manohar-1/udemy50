const canvas = document.getElementById("canvas");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clearButton = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY; 
  
  if(y>550 || y<0 || x>=801 || x<0){
      isPressed = true;
  }
  console.log(x,y);
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;

  console.log(isPressed, x, y);
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

canvas.addEventListener("mouseleave",(e)=>{
    isPressed=false;
})

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

increaseButton.addEventListener("click", () => {
  size += 1; 
  decreaseButton.disabled=false;
  if (size >= 20) {
    size = 20; 
    increaseButton.disabled=true;
  }

  updateSizeOnScreen();
});

decreaseButton.addEventListener("click", () => {
  size -= 1; 
  increaseButton.disabled=false;

  if (size <= 1) {
    size = 1;
    decreaseButton.disabled=true;
  }

  updateSizeOnScreen();
});

function updateSizeOnScreen() {
  sizeElement.innerText = size;
}

colorElement.addEventListener("change", (e) => {
  color = e.target.value;
});

clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
