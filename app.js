const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("js_color");
const range = document.getElementById("jsRange");
const mode = document.getElementById("mode");
const save = document.getElementById("save");

canvas.height = 600;
canvas.width = 600;

const initialColor = "rgb(9, 9, 9)";

ctx.lineWidth = 2.5;
ctx.strokeStyle = initialColor;
ctx.fillStyle = initialColor;

let painting = false;
let filling = false;

function onMouseMove(e) {
    x = e.offsetX;
    y = e.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function stopPainting(e) {
    painting = false;
}

function startPainting(e) {
    painting = true;
}

function onMouseDown(e) {
    painting = true;
}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}

Array.from(colors).forEach((color) =>
    color.addEventListener("click", changeColor)
);

function changeColor(e) {
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(e) {
    const rangeValue = e.target.value;
    ctx.lineWidth = rangeValue;
}

if (range) {
    range.addEventListener("input", handleRangeChange);
}

function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}
