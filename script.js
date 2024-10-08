let size = 16;
const main = document.querySelector(".main");
const button = document.querySelector("button");

function colorPixels() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            pixel.classList.add("color");
        })
    })
}

function drawGrid (n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        main.appendChild(row)
        for (let j = 0; j < n; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }
    }
    colorPixels();
}

function wipeGrid() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        main.removeChild(row);
    })
}



drawGrid(size);

button.addEventListener("click", () => {
    checkInput();
    wipeGrid();
    drawGrid(size);
});

function checkInput() {
    while (true) {
        size = prompt("Enter custom size");

        if (size > 0 && size <= 100) break;
    }
}