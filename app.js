const canvas = document.getElementById("js-canvas");

function onMouseMove(e) {
console.log(e);
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
} 