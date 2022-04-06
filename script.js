const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear-btn");
const newCanvasButton = document.querySelector("#new-canvas-btn");


for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.classList.add("squares");
  container.appendChild(div);
}

container.style.display = "grid";
container.style.justifyContent = "center";
container.style.gridTemplateColumns = "repeat(16, 10px)";
container.style.gridTemplateRows = "repeat(16, 10px)";
container.style.gridColumnGap = "0px";
container.style.gridRowGap = "0px";
container.style.border = "dashed";

const squares = document.querySelectorAll(".squares");

squares.forEach(square => {
  square.addEventListener("mouseover", (event) => {
    event.target.style.background = "red";
  });
})

clearButton.addEventListener("click", () => {
  squares.forEach(square => {
    square.style.background = "white";
  });
})

newCanvasButton.addEventListener("click", () => {
  container.remove()
  const newContainer = document.querySelector("#new-container")
  
  let size = prompt("Enter the size of your canvas: (up to 100)", "16");
  Number.parseInt(size, 10);


  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("newSquares");
    newContainer.appendChild(div);
  }

  newContainer.style.display = "grid";
  newContainer.style.justifyContent = "center";
  newContainer.style.gridTemplateColumns = "repeat(16, 10px)";
  newContainer.style.gridTemplateRows = "repeat(16, 10px)";
  newContainer.style.gridColumnGap = "0px";
  newContainer.style.gridRowGap = "0px";
  newContainer.style.border = "dashed";

})
  
