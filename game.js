///rock = 0
        ///paper = 1
        ///scissors = 2
        let computerChoice;
        let playerChoice;
        let playerScore;
        let computerScore;

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

        function playGame(){
            playerScore = 0;
            computerScore = 0;
            for(let i = 0; i < 5; i++){

                
                console.log("Round "+i+", pick an element!");
                let ok = false;
                while(!ok){//player must input correct string
                    let playerInput = prompt("Write your answer!");
                    ok = true;
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
                }
                

                getComputerChoice();
                console.log(computerChoice +"  "+ playerChoice);
                let result = playRound(computerChoice,playerChoice);
                console.log(result);
            }

            if(playerScore > computerScore)
                console.log("You won the game! Congrats!");
            else if(playerScore < computerScore)
                console.log("You lost the game! Try again sometime!");
            else
                console.log("The game was a TIE! Wow!");
        }

        playGame();