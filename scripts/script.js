//run functions only after dom content is loaded
document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("body").addEventListener("click", function(e) {
        if(e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.getElementById("draw");
            if(click) {
                draw.innerHTML = "You can draw now!";
            }
            else {
                draw.innerHTML = "You can't draw yet!";
            }
        }
    })

    let btn_popup = document.getElementById("size");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        createGrid(size);
    })
})
//global variables 
let color = "black";
let click = false;

//accessing the grid container
let gridBox = document.querySelector("#grid");
//function to create grid as per the size
function createGrid(size) {
    //split container into columns and rows
    gridBox.style.display = "grid";
    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    //add new square divs
    for (let i = 0; i < size**2; i++) {
        let div = document.createElement("div");
        div.className = "square";
        div.id = "square"+i;
        div.addEventListener("mouseover", colorDiv);
        gridBox.insertAdjacentElement("beforeend", div);
    } 


}

//function to get the size from clicking select button
function getSize() {
    let input = prompt("Enter a number.");
    let message = document.getElementById("message");
    //checking the input
    //when input is not a number
    if(input == "") {
        message.innerHTML = "Not a number, please enter a number only.";
    }
    else if(input < 0 || input > 100) {
        message.innerHTML = "Limit crossed! Please enter a number between 1 and 100.";
    }
    else {
        message.innerHTML = "Success! Now you can play!";
        return input;
    }

}

//change color of the divs
function colorDiv() {
    if(click) {
        //set color to random if random chosen
        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        //set default black 
        else {
            this.style.backgroundColor = "black";
        }
    }
}


function setColor(colorChoice) {
    color = colorChoice
}

//change color of the divs to white on clicking reset button
function reset() {
    let divs = document.querySelectorAll(".square");
    divs.forEach(div => div.style.backgroundColor = "white");
}



