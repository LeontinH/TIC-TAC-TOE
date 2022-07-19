document.addEventListener("DOMContentLoaded", function(event){
  var table = document.getElementById("gameBoard");
  for (var i = 0, row; i <= 2;  ++i) {
    row = table.rows[i];
    for (var j = 0, cell; j <= 2; ++j) {
      cell = row.cells[j];
      fillInCells(cell);
      checkTheWinner(cell);
      changePlayer(cell);
    }
  }
  document.getElementById("startAgain").style.visibility = "hidden";
});

let nextPlayer = "X";
let freeCells = 9;

function fillInCells(cell) {
  cell.addEventListener("click", function() {
    if(cell.innerHTML == ""){
      cell.innerHTML = nextPlayer;
      --freeCells;
    }     
  });       
}

function changePlayer(cell) {
  cell.addEventListener("click", function() {
      if(nextPlayer == "X"){
        nextPlayer = "O";
      } else {
        nextPlayer = "X";
      }
  });
}
 
function checkTheWinner(cell) {
  cell.addEventListener("click", function() {
    let theWinner = "";
    let cell1 = document.getElementById("cellNo0").innerHTML;
    let cell2 = document.getElementById("cellNo1").innerHTML;
    let cell3 = document.getElementById("cellNo2").innerHTML;
    let cell4 = document.getElementById("cellNo3").innerHTML;
    let cell5 = document.getElementById("cellNo4").innerHTML;
    let cell6 = document.getElementById("cellNo5").innerHTML;
    let cell7 = document.getElementById("cellNo6").innerHTML;
    let cell8 = document.getElementById("cellNo7").innerHTML;
    let cell9 = document.getElementById("cellNo8").innerHTML;
   
    if ((((cell1 == cell2) && (cell2 == cell3)) || ((cell1 == cell4) && (cell4 == cell7))) && (cell1 != "")) {
      theWinner = cell1;
    }

    if ((((cell3 == cell6) && (cell6 == cell9)) || ((cell7 == cell8) && (cell8 == cell9))) && (cell9 != "")) {
      theWinner = cell9;
    }
   
    if ((((cell1 == cell5) && (cell5 == cell9)) || ((cell3 == cell5) && (cell5 == cell7)) || ((cell4 == cell5) && 
      (cell5 == cell6)) || ((cell2 == cell5) && (cell5 == cell8))) && (cell5 != "")) {
      theWinner = cell5;
    }

    if (theWinner != "") {
      print("The winner is the player played with: " + theWinner);
      document.getElementById("startAgain").style.visibility = "visible";
    }

    if (theWinner == "" && freeCells == 0) {
      print("It is a draw!");
      document.getElementById("startAgain").style.visibility = "visible";
    }
  });
}

function print(str) {
  return document.getElementById("mesageElement1").innerHTML = str;
}

function reStart() {
  window.location.reload();
}