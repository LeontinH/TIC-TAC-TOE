document.addEventListener("DOMContentLoaded", function(event){
  let table = document.getElementById("gameBoard");
  for (let i = 0, row; i <= 2;  ++i) {
    row = table.rows[i];
    for (let j = 0, cell; j <= 2; ++j) {
      cell = row.cells[j];
      fillInCells(cell);
      checkTheWinner(cell);
    }
  }
  document.getElementById("startAgain").style.visibility = "hidden";
});

let nextPlayer = "X";
let freeCells = 9;

function fillInCells(cell) {
  cell.addEventListener("click", function() {
    if (cell.innerHTML == "" && freeCells != -1) {
      cell.innerHTML = nextPlayer;
      --freeCells;
      changePlayer();
    }     
  });       
}

function changePlayer() {
  if (nextPlayer == "X"){
    nextPlayer = "O";
  } else {
    nextPlayer = "X";
  }
}
 
function checkTheWinner(cell) {
  cell.addEventListener("click", function() { 
    let cells = document.querySelectorAll("td");
    let cellStr = ["", "", "", "", "", "", "", "", ""];
    for(let i = 0; i < 9; ++i){
      cellStr[i] = cells[i].innerHTML;
    }
    if ((((cellStr[0] == cellStr[1]) && (cellStr[1] == cellStr[2])) || ((cellStr[0] == cellStr[3]) && (cellStr[3] == cellStr[6]))) && (cellStr[0] != "")) {
      print("The winner is the player played with: " + cellStr[0]);
    } else if ((((cellStr[2] == cellStr[5]) && (cellStr[5] == cellStr[8])) || ((cellStr[6] == cellStr[7]) && (cellStr[7] == cellStr[8]))) && (cellStr[8] != "")) {
      print("The winner is the player played with: " + cellStr[8]);
    } else if ((((cellStr[0] == cellStr[4]) && (cellStr[4] == cellStr[8])) || ((cellStr[2] == cellStr[4]) && (cellStr[4] == cellStr[6])) || 
      ((cellStr[3] == cellStr[4]) && (cellStr[4] == cellStr[5])) || ((cellStr[1] == cellStr[4]) && (cellStr[4] == cellStr[7]))) && (cellStr[4] != "")) {
      print("The winner is the player played with: " + cellStr[4]);
    } else if (freeCells == 0) {
      print("It is a draw!");
    }
  });
}

function print(str) {
  freeCells = -1;
  document.getElementById("startAgain").style.visibility = "visible";
  return document.getElementById("mesageElement1").innerHTML = str;
}

function reStart() {
  window.location.reload();
}
