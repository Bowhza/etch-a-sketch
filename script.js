let dimensions = 16;
let color = "black";
const body = document.querySelector("body");

const gridContainer = document.querySelector(".grid-container");
gridContainer.style.width = "600px";
gridContainer.style.height = "600px";

//The functions that created the grid.
let gridDimensions = function(){
    for (let boxes = 0; boxes < dimensions * dimensions; boxes++){
        //creates the grid based on the entered dimensions.
        let gridBox = document.createElement("div");
        gridBox.setAttribute("class", "grid-box");
        gridBox.style.width = `${(600/dimensions)}px`;
        gridBox.style.height = `${(600/dimensions)}px`;
        //Adds an event listener that paints the selected color where the mouse is on the grid.
        gridBox.addEventListener("mouseover", () => {
            gridBox.style.backgroundColor = color;
        });
        gridContainer.appendChild(gridBox);
    }
}

gridDimensions();

//Clears the grid from all color.
let clearCanvas = document.getElementById("clear-button");
clearCanvas.addEventListener("click", () => {
    let boxes = gridContainer.querySelectorAll(".grid-box");
    for (let i=0; i < boxes.length; i++){
       boxes[i].style.backgroundColor = "white";
    }
});

//Functions the resets the canvas.
let resetGrid = () => {
    let boxes = gridContainer.querySelectorAll(".grid-box");
    for (let i=0; i < boxes.length; i++){
       boxes[i].remove();
    };
    gridDimensions();
};


//Changes the grid size and resets the canvas back to white.
let button16 = document.getElementById("16");
button16.addEventListener("click", () => {
    dimensions = button16.value;
    resetGrid();
});

let button32 = document.getElementById("32");
button32.addEventListener("click", () => {
    dimensions = button32.value;
    resetGrid();
});

let button50 = document.getElementById("50");
button50.addEventListener("click", () => {
    dimensions = button50.value;
    resetGrid();
});

let button100 = document.getElementById("100");
button100.addEventListener("click", () => {
    dimensions = button100.value;
    resetGrid();
});


//Changes the color of the pen.
let colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener('change', (e) => {
    color = e.target.value;
});

let eraserButton = document.getElementById("eraser");
eraserButton.addEventListener("click", () => {
    color = "white";
});

let randomColor = document.getElementById("random");
randomColor.addEventListener("click", () => {
    color = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(color);
});

