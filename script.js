

const Player = (name,char,color) => {
  const getName = () =>   name;
  const getChar = () => char;
  const getColor = () => color;
return {getName,getChar,getColor};
}



const GameBoard = (() => {
  let player1, player2;
  let currentPlayer ;
  const body = document.body;
const container = document.createElement('div');

container.id = "container";
body.append(container);
const ttt = document.createElement("h1");
const text = document.createElement('p');
ttt.innerText="TIC TAC TOE";

body.append(text);
body.append(ttt);





    let arr = [["","",""],["","",""],["","",""]];
    const changePlayer = () => {
      if(currentPlayer===player1){
        currentPlayer=player2;
      }
      else {
        currentPlayer=player1;
      }
    }


    const checkWin = () => {

      return(horizontalWin()||verticalWin()||diagonalWin());
       
     
      
    }
      const diagonalWin = () => {
        if(arr[0][0].innerText===currentPlayer.getChar()){
          if(arr[1][1].innerText===currentPlayer.getChar()){
            if(arr[2][2].innerText===currentPlayer.getChar()){
              text.innerText = currentPlayer.getName() + " won!";
              return true;
            }
          }
        }
        if(arr[0][2].innerText===currentPlayer.getChar()){
          if(arr[1][1].innerText===currentPlayer.getChar()){
            if(arr[2][0].innerText===currentPlayer.getChar()){
              text.innerText = currentPlayer.getName() + " won!";
              return true;
            }
          }
      }
      return false;
    }
    const verticalWin = () => {
     
      for(j=0;j<3;j++){
       for(i=0;i<3;i++){

           if(arr[i][j].innerText===currentPlayer.getChar()){
             if(i==2){
              text.innerText = currentPlayer.getName() + " won!";
               return true;
             }
             
           }
           else {
             break;
           }
        }
      }
      return false;
      }


      const horizontalWin = () => {
     
        for(i=0;i<3;i++){
         for(j=0;j<3;j++){
  
             if(arr[i][j].innerText===currentPlayer.getChar()){
               if(j==2){
                text.innerText = currentPlayer.getName() + " won!";
                 return true;
               }
               
             }
             else {
               break;
             }
          }
        }
        return false;
        }
    

    const inputPlayersNames = () => {
      const player1name = prompt("Name of player 1: ");
  const player2name = prompt("Name of player 2: ");
  player1 = Player(player1name,"X","green");
   player2 = Player(player2name,"O","yellow");
  text.innerHTML= player1name + " is putting X. " + player2name + " is putting Os. " + player1name + " starts";
  currentPlayer=player1;
    }
    const checkTie = () => {
      arr.forEach(x => {
        if(x.innerText===""){
          return false;
        }
      });
      return true;
    }
    const displayGrid = () => {
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          let div = document.createElement('div');
      // let but = document.createElement('button');
          div.id="" + i + "" + j;
          arr[i][j] = div;
         // but.id = "" +i + "" + j;
          container.append(div);
          //div.append(but);
          div.addEventListener('click',() => {
            if(div.innerText===""){

            
            div.innerHTML = currentPlayer.getChar();
           if(checkTie()){
             text.innerText="It's a tie!Start again?"
           }
            if(checkWin()){
            
           
            }
           
            else {

              changePlayer();
              text.innerText="It's " + currentPlayer.getName() + "'s turn";
            }
          }
          else {
            text.innerText = "Can't pick that!";
          }
          })
       
          //  div.addEventListener("mouseover", () => {
          //    if(div.innerHTML===""){
          //      div.innerText=currentPlayer.getChar();
              
          //      setTimeout(()=>{
          //        div.innerText="";
          //        div.style.background="rgb(206, 82, 24)";
          //      },500);
          //    }
            
          //  })
         
        }
      }
      
    }
    
    const initializeArray = () => {
    if(btn.innerText==="Start"){
    displayGrid();
    inputPlayersNames();
      
   }
   

                for(i = 0;i<3;i++){
                  for(j=0;j<3;j++){
                    arr[i][j].innerText="";
                  }
                }
                
    }
      const changeText = () => {
        text.innerText=currentPlayer.getName() + " starts";
      }

    return {
      initializeArray,
      changeText,
    }
})();
//GameBoard.initializeArray();
const btn = document.getElementById("startBtn");
btn.innerText="Start";
btn.onclick = () => {
  if(btn.innerText==="Restart"){
    GameBoard.changeText();
  }
    
    GameBoard.initializeArray();

btn.innerText="Restart";
   
  
}
