const Response = document.getElementById("response");
const square = document.getElementById("square");

function generate() {
    // Generate random RGB values 0-255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    Response.textContent = `Your color is: rgb(${r}, ${g}, ${b})`;

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    console.log("working");
}