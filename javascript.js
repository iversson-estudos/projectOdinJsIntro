
let playerScore=0;
let computerScore=0; 
let roundsPlayed= 0;
let draws = 0;

const displayScore = document.getElementById('score');
const displayPlayerScore = document.createElement('p');
const displayComputerScore = document.createElement('p');
const displayRoundsPlayed = document.createElement('p');
const displayDraws = document.createElement('p');

displayRoundsPlayed.textContent=`Rounds Played: ${roundsPlayed}`;
displayPlayerScore.textContent = `Player: ${playerScore}`;
displayComputerScore.textContent = `Computer: ${computerScore}`;
displayDraws.textContent = `Draws: ${draws}`;

displayScore.appendChild(displayRoundsPlayed);
displayScore.appendChild(displayPlayerScore);
displayScore.appendChild(displayComputerScore);
displayScore.appendChild(displayDraws);

const btnRock= document.getElementById('rock');
const btnPaper= document.getElementById('paper');
const btnScissors= document.getElementById('scissors');

btnRock.addEventListener('click',()=> playGame('Rock'));
btnPaper.addEventListener('click',()=> playGame('Paper'));
btnScissors.addEventListener('click',()=> playGame('Scissors'));










//plays the game
function playGame(playerChoice){  
    
    
     
    //Plays the round
    let result = playRound(playerChoice,getComputerChoice());
    
    
   
    if (result==="Draw")
    {   
        draws++;
        roundsPlayed++;
    }
    else if(result.substring(0,8)==="Win")    
    {
        playerScore++;
        roundsPlayed++;

    }
    else if(result.substring(0,9)==="Lose")
    {
        computerScore++;
        roundsPlayed++;

    }
    // Update displayed scores
    displayPlayerScore.textContent = `Player: ${playerScore}`;
    displayComputerScore.textContent = `Computer: ${computerScore}`;
    displayDraws.textContent = `Draws: ${draws}`;
    displayRoundsPlayed.textContent = `Rounds Played: ${roundsPlayed}`;
 
 
 
    //displays winners if threshold of 5 rounds has been achieved
if(roundsPlayed==5)
    {   
    
    const displayResult = document.getElementById('result');
    const winMessage = document.createElement('h1');

    //checks winner
    if(computerScore==playerScore)
    {
        winMessage.textContent="GAME HAS FINISHED IN A DRAW";
        displayResult.appendChild(winMessage);        
    }
    else if(computerScore>playerScore)
    {
        winMessage.textContent="GAME HAS FINISHED, COMPUTER WON!!";
        displayResult.appendChild(winMessage);        
    }
    else if(computerScore<playerScore)
    {
        winMessage.textContent="GAME HAS FINISHED, YOU WON!!";
        displayResult.appendChild(winMessage);        
    }
    roundsPlayed=0;
    playerScore=0;
    draws=0;
    computerScore=0;   
    }
//removes result after another game has started
else
{
    const displayResult = document.getElementById('result');
    displayResult.removeChild(displayResult.firstChild);
}








}


function playRound(playerSelection,computerSelection){



//Checks for draws    
    if(playerSelection==computerSelection){
        return "Draw";
    }

//Switch case to every scenario except draw    
    switch(playerSelection){
        case 'Rock':
                if(computerSelection=='Scissors')
                {
                    
                    return "Win";
                }
                else 
                {
                    
                    return "Lose";
                }
            
        case 'Paper':
                if(computerSelection=='Rock')
                {
                    
                    return "Win";
                }
                else
                {
                    
                    return "Lose";
                }
                
        case 'Scissors':
                if(computerSelection=='Paper')
                {
                    
                    return "Win";
                }
                 else 
                 {
                    
                    return "Lose";
                }
            }
    
}

function getComputerChoice(){
    const choices= ['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}