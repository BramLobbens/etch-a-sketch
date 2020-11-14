"use strict";

const container = document.querySelector("#container");
const WINDOW_SIZE = 480;

// Draw
const drawGrid = (n) => {

    // Clear existing squares
    while (container.firstChild) {
        container.firstChild.remove();
    }

    // Draw new squares
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.className = "grid-row";
        container.appendChild(row);

        for (let j = 0; j < n; j++) {
            const col = document.createElement("div");
            col.className = "grid-col";3
            col.id = `row-${i}-col-${j}`;
            container.appendChild(col);
        }
    }

    // Draw squares limited to window size
    var cols = document.querySelectorAll(".grid-col");
    cols.forEach((col) => {
        col.style.height = Math.round(WINDOW_SIZE / n) + "px";
        col.style.width = Math.round(WINDOW_SIZE / n) + "px";
    })
};

// New Event
const btnNew = document.querySelector("#btn-new");
btnNew.addEventListener("click", () => {
    let n = prompt("Choose dimension");
    while (n > 100 || n < 0)
    {
        n = prompt("Must be between 0 and 99");
    }
    drawGrid(n);

    const squares = document.querySelectorAll(".grid-col");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.classList.toggle("blue");
        });
    });
});

// Clear Event
const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", () => {

    const squares = document.querySelectorAll(".grid-col");
    squares.forEach((square) => {
        square.classList.remove("blue");
    });
    
});

