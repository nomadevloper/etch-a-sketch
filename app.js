const container = document.querySelector(".container");

// for (let i=0; i<16; i++) {
//     const row = document.createElement("div");
//     row.classList.add(`row${i}`);
//     for (let j=0; j<16; j++) {
//         const col = document.createElement("div");
//         col.classList.add(`col${j}`);
//         row.appendChild(col);
//     }
//     container.appendChild(row);
// }

let mouseDown = false;


for (let i=0; i<16; i++) {
    const row = document.createElement("div");
    row.classList.add("row", `row${i}`);
    for (let j=0; j<16; j++) {
        const col = document.createElement("div");
        col.classList.add("grid", `col${j}`);
        col.addEventListener("mousedown", () => {
            mouseDown = true;
        });
        col.addEventListener("mouseup", ()=> {
            mouseDown = false;
        })
        col.addEventListener("click", function(){
            this.classList.add("clicked");
        });
        col.addEventListener("mouseover", function(){
            if(mouseDown) {
                this.classList.add("clicked");
            }
        });
        row.appendChild(col);
    }
    container.appendChild(row);
}

const grids = document.querySelectorAll(".grid");