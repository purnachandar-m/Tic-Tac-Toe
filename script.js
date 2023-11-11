console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("Ting.mp3")
let gameOver = new Audio("GameOver.wav")
let turn = "X"
let isgameover = false

//Function to change the turns
const changeTurn = ()=>{
     return turn === "X"?"0":"X"

}

//Function to check Win
const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
  let wins = [
    [0,1,2,4,4,0],
    [3,4,5,4,10,0],
    [6,7,8,4,19,0],
    [0,3,6,-5,15,90],
    [1,4,7,4,13,90],
    [2,5,8,15,13,90],
    [0,4,8,5,12,35],
    [2,4,6,4,13,136],
  ]
  wins.forEach(e=>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !== "") ){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText +" WON!!"
        isgameover = true
        document.querySelector(".line").style.width= "20vw"
        document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        gameOver.play();
    }
  })
}
//Main Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
           boxtext.innerText = turn
           turn = changeTurn();
           audioTurn.play();
           checkWin();
           if(!isgameover){
           document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
           }
        }

    })
}) 
//Add onclick
reset.addEventListener('click',(e)=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width= "0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})