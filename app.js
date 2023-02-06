const changePixel = document.querySelector(".changePixel");
const reset = document.querySelector(".reset");
const container = document.querySelector(".container");
const defaultNum = 16;

let mouseDown = false;

function makeGrids(n) {
    for (let i=0; i<n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j=0; j<n; j++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.addEventListener("mousedown", () => {
                mouseDown = true;
            });
            grid.addEventListener("mouseup", ()=> {
                mouseDown = false;
            })
            grid.addEventListener("click", changeColor);
            grid.addEventListener("mouseover", changeColor);
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}

function removeGrids() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.remove();
    });
}

function changeColor(e) {
    if (e.type==="click" || mouseDown) {
        this.classList.add("clicked");
    }
}

changePixel.addEventListener("click", function(){
    let num;
    do {
        num = prompt("Enter the number of squares per side for new grid. *max=100");
        num = Number.parseInt(num);
    } while(!(num && num<=100))
    removeGrids();
    makeGrids(num);
})

reset.addEventListener("click", function(){
    removeGrids();
    makeGrids(defaultNum);
})

makeGrids(defaultNum);