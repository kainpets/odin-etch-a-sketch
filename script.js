const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear-btn");
const newCanvasButton = document.querySelector("#new-canvas-btn");
const everything = document.querySelector(".everything");

const createSquares = numOfSquares => {
  container.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;
  
  
  for (let i = 0; i < numOfSquares**2; i++) {
    let div = document.createElement("div");
    div.classList.add("squares");
    container.appendChild(div);
    const squares = document.querySelectorAll(".squares");
    
    squares.forEach(square => {
      square.addEventListener("mouseover", event => {
        event.target.style.background = "red";
      });
    })
  }
} 

const changeSize = size => {
  if(size >= 2 && size < 100) {
    const squares = document.querySelectorAll(".squares");
    squares.forEach(square => square.remove());
    createSquares(size);
  } else {
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "Set a value from 2 to 100";
    everything.appendChild(errorMessage);
  }
}

clearButton.addEventListener("click", () => {
  squares.forEach(square => {
    square.style.background = "white";
  });
})

createSquares(16);