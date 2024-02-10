//plays the game
function playGame(){
    //scores for both players
    let playerScore=0;
    let computerScore=0; 
 
    

for (let counter=0;counter<5;counter++){    
    let choice = prompt("Choose between Rock Paper and Scissors");
   //checks for null input
    if (choice==null  || choice==''){
        return ('\n'+"Didnt Understand your choice");
    }
    
    //Plays the round
    let result = playRound(choice,getComputerChoice());
    
    //checks winner and updates score and logs the return
   
    if (result.substring(0,4)==='That')
    {
        console.log('\n'+result);
        console.log('\n'+"Score now is: "+'\n' + "You: " +playerScore+'\n'+"Computer: "+computerScore);
    }
    else if(result.substring(0,8)==='You Win!')
    {
        playerScore++;
        console.log('\n'+result);
        console.log('\n'+"Score now is: "+'\n' + "You: " +playerScore+'\n'+"Computer: "+computerScore);
    }
    else if(result.substring(0,9)==='You Lose!')
    {
        computerScore++;
        console.log('\n'+result);
        console.log('\n'+"Score now is: "+'\n' + "You: " +playerScore+'\n'+"Computer: "+computerScore);
    }
    
  }
  console.log('\n'+"GAME IS FINISHED"+'\n'+"FINAL RESULT IS: "+'\n' + "YOU: " +playerScore+'\n'+"COMPUTER: "+computerScore);
}


function playRound(player,computer){
//String modifier to make choices all lowerCase then next the first letter upperCase
let playerSelect = player.toLowerCase();
let computerSelect = computer.toLowerCase();
let playerSelection=playerSelect[0].toUpperCase() + playerSelect.substring(1);
let computerSelection=computerSelect[0].toUpperCase() + computerSelect.substring(1);

//Checks for draws    
    if(playerSelection==computerSelection){
        return "That's a Draw, both players have choosen "+ playerSelection;
    }

//Switch case to every scenario except draw    
    switch(playerSelection){
        case 'Rock':
                if(computerSelection=='Scissors')
                {
                    
                    return "You Win! "+playerSelection +" beats "+computerSelection +" :)";
                }
                else 
                {
                    
                    return "You Lose! "+computerSelection +" beats "+playerSelection +" :(";
                }
            
        case 'Paper':
                if(computerSelection=='Rock')
                {
                    
                    return "You Win! "+playerSelection +" beats "+computerSelection +" :)";
                }
                else
                {
                    
                    return "You Lose! "+computerSelection + " beats "+playerSelection +" :(";
                }
                
        case 'Scissors':
                if(computerSelection=='Paper')
                {
                    
                    return "You Win! "+playerSelection +" beats "+computerSelection +" :)";
                }
                 else 
                 {
                    
                    return "You Lose! "+computerSelection +" beats "+playerSelection +" :(";
                }
            }
    
}

function getComputerChoice(){
    const choices= ['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}