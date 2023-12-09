document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const resetButton = document.getElementById("reset");
  const randomizeButton = document.getElementById("randomize");
  const speedSlider = document.getElementById("speed");
  const sizeSlider = document.getElementById("size");

  startButton.addEventListener("click", startGame);
  stopButton.addEventListener("click", stopGame);
  resetButton.addEventListener("click", resetGame);
  randomizeButton.addEventListener("click", randomGame);
  speedSlider.addEventListener("change", changeSpeed);
  sizeSlider.addEventListener("change", changeSize);

  // Generate the table for the first time
  generateTable(50);
});

let play = false;
let intervalId;

function startGame() {
  console.log("start!");
  play = true;
  const speedValue = document.getElementById("speed").value;

  // Clear the existing interval only if it's running
  if (intervalId) {
      clearInterval(intervalId);
  }

  // Set a new interval
  intervalId = setInterval(playStep, (100 - speedValue)* 10);
}

function playStep() {
  console.log("step");
  console.log(document.getElementById("speed").value);
  updateCellStates();
}

function stopGame() {
  console.log("stop");
  play = false;
  clearInterval(intervalId);
}

function resetGame() {
  console.log("reset");
  play = false;
  clearInterval(intervalId);

  const cells = document.querySelectorAll("td");
  cells.forEach((cell) => cell.classList.remove("alive"));
}

function changeSpeed() {
  const speedValue = document.getElementById("speed").value;
  console.log("speed: " + speedValue);
  document.getElementById("speedValueText").textContent = speedValue;
}

function changeSize() {
  const sizeValue = document.getElementById("size").value;
  console.log("size: " + sizeValue);
  document.getElementById("sizeValueText").textContent = sizeValue;
  generateTable(sizeValue);
}

function generateTable(size) {
  const gridBody = document.getElementById('gridBody');

  // Clear the existing table
  gridBody.innerHTML = "";

  // Calculate the adjusted size based on the aspect ratio
  const windowWidth = 11.97;
  const windowHeight = 8.46;
  const aspectRatio =  windowWidth /  windowHeight;
  const adjustedSizeColumns = Math.round(size * aspectRatio);

  console.log("==========");
  console.log(`size: ${size}`);
  console.log(`Adjusted size: ${adjustedSizeColumns} x ${size}`);
  console.log("==========");

  // Create rows and cells for the table
  for (let i = 0; i < size; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < adjustedSizeColumns; j++) {
          const cell = document.createElement('td');
          cell.addEventListener('click', () => toggleCell(i, j));
          row.appendChild(cell);
      }

      gridBody.appendChild(row);
  }
}




function toggleCell(row, col) {
  console.log(`Toggle cell at (${row}, ${col})`);
  const cell = document.getElementById('gridBody').children[row].children[col];
  cell.classList.toggle('alive');
}

function updateCellStates() {
  const cells = document.querySelectorAll("td");

  // Mark cells based on rules
  cells.forEach((cell) => {
    const neighbors = getNeighbors(cell);
    if (cell.classList.contains("alive")) {
      if (neighbors === 2 || neighbors === 3) {
        cell.classList.add("alive_next");
      }
    } else {
      if (neighbors === 3) {
        cell.classList.add("alive_next");
      }
    }
  });

  // Apply changes
  cells.forEach((cell) => {
    if (cell.classList.contains("alive_next")) {
      cell.classList.add("alive");
    } else {
      cell.classList.remove("alive");
    }
    cell.classList.remove("alive_next");
  });
}


function getNeighbors(cell) {
  let count = 0;
  let row = cell.parentElement;
  let table = row.parentElement;
  let rowNumber = row.rowIndex;
  let cellNumber = cell.cellIndex;
  let rowAbove = table.rows[rowNumber - 1];
  let rowBelow = table.rows[rowNumber + 1];
  let rowAboveCells = rowAbove ? rowAbove.cells : [];
  let rowBelowCells = rowBelow ? rowBelow.cells : [];
  let neighbors = [
    rowAboveCells[cellNumber - 1],
    rowAboveCells[cellNumber],
    rowAboveCells[cellNumber + 1],
    row.cells[cellNumber - 1],
    row.cells[cellNumber + 1],
    rowBelowCells[cellNumber - 1],
    rowBelowCells[cellNumber],
    rowBelowCells[cellNumber + 1],
  ];
  for (let i = 0; i < neighbors.length; i++) {
    let neighbor = neighbors[i];
    if (neighbor && neighbor.classList.contains("alive")) {
      count++;
    }
  }
  return count;
}


function stopGame() {
  console.log("stop");
  play = false;
  clearInterval(intervalId);
}


function resetGame() {
    console.log("reset");
    play = false;
    clearInterval(intervalId);
    let cells = document.querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
      cell.classList.remove("alive");
    }
}

function randomGame() {
    console.log("random");
    play = false;
    
    let cells = document.querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
      if (Math.random() > 0.85) {
        cell.classList.add("alive");
      } else {
        cell.classList.remove("alive");
      }
    }
}









