///rock = 0
        ///paper = 1


        ///scissors = 2
        let computerChoice;
        let playerChoice;
        let playerScore = 0;
        let computerScore = 0;
        let nrRounds = 1;

        let paperBtn = document.querySelector('.paper-button');
        let rockBtn = document.querySelector('.rock-button');
        let scissorsBtn = document.querySelector('.scissors-button');
        let resultText = document.querySelector('#result-text');



        function getComputerChoice(){
            computerChoice = getRandomInt(3);//generate random computer response
        }

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        function playRound(computerChoice, playerChoice){
            switch(computerChoice){
                case 0 : 
                    if(playerChoice === 0)
                        return "Tie!";
                    if(playerChoice === 2){
                        computerScore++;
                        return "You Lose!";
                    }
                        
                    if(playerChoice === 1){
                        playerScore++;
                        return "You Win!";
                    }
                        
                break;
                case 1 :
                    if(playerChoice === 1)
                            return "Tie!";
                    if(playerChoice === 0){
                        computerScore++;
                        return "You Lose!";
                    }
                        
                    if(playerChoice === 2){
                        playerScore++;
                        return "You Win!";
                    }
                        
                break;
                case 2 :
                    if(playerChoice === 2)
                            return "Tie!";
                    if(playerChoice === 0){
                        computerScore++;
                        return "You Lose!";
                    }
                        
                    if(playerChoice === 1){
                        playerScore++;
                        return "You Win!";
                    }
                        
                break;
                default: return "Invalid commands!";
            }
        }

        function playGame(playerInput){
            

                
              
              
                    playerInput.toLocaleLowerCase();

                    switch (playerInput){
                        case "rock" : 
                            playerChoice = 0;
                        break;
                        case "paper" : 
                            playerChoice = 1;
                        break;
                        case "scissors" : 
                            playerChoice = 2;
                        break;
                        default : console.log("Wrong input!!");
                        ok = false;
                    }
                
                

                getComputerChoice();
                console.log(computerChoice +"  "+ playerChoice);
                let result = playRound(computerChoice,playerChoice);
                resultText.textContent=result;
                console.log(result);
            
                getScore();
        }

        function getScore(){


            if(nrRounds === 5){
                if(playerScore > computerScore)
                resultText.textContent="You won the game! Congrats!";
                else if(playerScore < computerScore)
                resultText.textContent="You lost the game! Try again sometime!";
                else
                resultText.textContent="The game was a TIE! Wow!";

                playerScore = 0;
                computerScore = 0;
                nrRounds = 1;
            }
            else{
                nrRounds++;
            }
      
        }

        rockBtn.addEventListener('click', function() {
            playGame('rock');
        });
        paperBtn.addEventListener('click', function() {
            playGame('paper');
        });
        scissorsBtn.addEventListener('click', function() {
            playGame('scissors');
        });
        

 