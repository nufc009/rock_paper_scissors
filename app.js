    function getComputerChoice() {
   
        let choice = ['rock', 'paper', 'scissors'];

        return choice[Math.floor(Math.random() * choice.length)];

    }

    function playRound(playerSelection, computerSelection) {

        let result = '';

        playerSelection = prompt('Type rock, paper or scissors')

        computerSelection = getComputerChoice();
        
            if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
            
                result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
                      
            } else if (playerSelection == 'scissors' && computerSelection == 'rock' || playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors') {

                result = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
            
            } else if (playerSelection === computerSelection) {

                result = 'Its a tie. You both chose ' + playerSelection;

            }

                return result;
        }
       
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound()); 