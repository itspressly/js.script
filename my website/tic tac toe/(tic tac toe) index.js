const cell = document.querySelectorAll(".cell")
const statustext = Document.querySelector("#statustext")
const restartbutton = Document.querySelector("#restartbutton")
const winconditions = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]

];
let options = ["","","","","","","","",""];
let currentplayer = "x";
let running = false;

initializeGame();

function initializeGame(){

cell.foreach(cell => cell.addEventlistener("click",cellCLicked))
    restartbutton.addEventlistener("click",restartgame);
    statustext.textContent = '${currentplayer}s turn'
    running = true;
}
function cellCLicked(){
    const cellIndex = this.getattribute("cellindex");

    if(options[cellindex] != "" || !running){
        return;
    }

    updateCell(this, cellindex);
    checkwinner();
}

function updateCell(cell, index){
    options[index] = currentplayer;
    cell.textContent = currentplayer;

}

function changeplayer(){
    currentplayer = (currentplayer == "x")? "o" : "x";
    statustext.textContent = '${currentplayer}s turn ';


}

function checkwinner(){


}

function restartgame(){


}