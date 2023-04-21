//run functions only after dom content is loaded
document.addEventListener("DOMContentLoaded", function() {
    
})


//accessing the grid container
let gridBox = document.querySelector("#grid");
//function to create grid as per the size
function createGrid(size=16) {
    //split container into columns and rows
    gridBox.style.display = "grid";
    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    //add new square divs
    for (let i = 0; i < size**2; i++) {
        let div = document.createElement("div");
        div.className = "square";
        div.id = "square"+i;
        gridBox.insertAdjacentElement("beforeend", div);
    }


}