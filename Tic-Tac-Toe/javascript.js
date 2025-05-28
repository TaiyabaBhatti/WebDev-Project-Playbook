const gameBoard  = document.getElementById("board");
const boardCells = document.querySelectorAll("[data-cell]");
const winning_Combination = 
[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]
const X_Class = "x";
const Circle_Class = "circle";
let circleTurn;
let message = document.querySelector("[data-winning-message]");
const restartButton = document.getElementById("restart");


const placeMark = (cellElement , currentClass) => {
    cellElement.classList.add(currentClass);
    console.log(currentClass);
}

const switchTurn = () => {
circleTurn = !circleTurn;
}

const settingBoardClass = () => {
gameBoard.classList.remove(X_Class);
gameBoard.classList.remove(Circle_Class);
if(circleTurn){
    gameBoard.classList.add(Circle_Class);
}
else{
    gameBoard.classList.add(X_Class);
}
}

const checkWin = (currentClass) => {

return winning_Combination.some((combination)=>{
return combination.every((index)=>{
    return boardCells[index].classList.contains(currentClass);
})
})
}

const endGame = (draw) => {
if(draw){
    message.innerText = "It's a Draw";
}
else if(!draw){
    message.innerText = `${ circleTurn ? "O's wins" : "X's wins"}`;

boardCells.forEach(cell => {cell.removeEventListener("click",clickedCell)} )

}
}

const isDraw = () => {
    return [...boardCells].every((cell) => {
return cell.classList.contains(Circle_Class)||cell.classList.contains(X_Class);
    });
}


const clickedCell = (e) => {
    const cell = e.target;
    const currentClass = circleTurn ? Circle_Class : X_Class;
    
//  place Mark
placeMark(cell,currentClass);

// check wins
if(checkWin(currentClass)){
endGame(false);
}
else if(isDraw()){
endGame(true);
}

switchTurn();

settingBoardClass();
}




const startGame =() => {


circleTurn=false;
    boardCells.forEach((cell)=>{
        cell.classList.remove(X_Class);
        cell.classList.remove(Circle_Class);
        cell.addEventListener("click",clickedCell,{once:true});
        });

        settingBoardClass();


}


restartButton.addEventListener("click",startGame)
startGame();







    

 