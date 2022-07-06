const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const resolution = 10;

canvas.style.width = "90%";
canvas.style.height = "100%";
canvas.width = canvas.offsetWidth - (canvas.offsetWidth % resolution);
canvas.height = canvas.offsetHeight - (canvas.offsetHeight % resolution);

const COLS = canvas.width / resolution;
const ROWS = canvas.height / resolution;

requestAnimationFrame(update);

function update() {
    requestAnimationFrame(update);
}
