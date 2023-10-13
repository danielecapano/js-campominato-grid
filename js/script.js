const btnPlay = document.querySelector(".btn");
const levelSelect = document.getElementById("level-select");
const gridElement = document.querySelector(".grid");

btnPlay.addEventListener("click", () => {
  const matrixGrid = parseInt(levelSelect.value ** 2);

  gridElement.innerHTML = "";

  createGrid(matrixGrid);

  createBox();
});

function createGrid(matrix) {
  for (let i = 0; i < matrix; i++) {
    const n = i + 1;

    const htmlContent = `<div class="box">${n}</div>`;

    gridElement.innerHTML += htmlContent;
  }
}

function createBox() {
  const boxGrid = document.querySelectorAll(".box");
  const columns = parseInt(levelSelect.value);
  for (let i = 0; i < boxGrid.length; i++) {
    const boxElement = boxGrid[i];
    boxElement.style.width = `calc(100% / ${columns})`;

    boxElement.addEventListener("click", () => {
      boxElement.classList.toggle("selected");
    });
  }
}
