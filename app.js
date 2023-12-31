const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');

let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');
let tieScore = document.querySelector('#tie-rounds');

let playerWins = 0;
let computerWins = 0;
let tieWins = 0;

function clickListener(event) {
    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

rockButton.addEventListener('click', clickListener);
paperButton.addEventListener('click', clickListener);
scissorButton.addEventListener('click', clickListener);

    
    function getComputerChoice() {

        let choice = ['rock', 'paper', 'scissors'];
   
        return choice[Math.floor(Math.random() * choice.length)];

    }

    function playRound(playerSelection, computerSelection) {
                 
        computerSelection = getComputerChoice();
        
            if (playerSelection == 'rock' && computerSelection == 'scissor' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissor' && computerSelection == 'paper') {
                playerWin();
                      
            } else if (playerSelection == 'scissor' && computerSelection == 'rock' || playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissor') {
                computerWin();
            
            } else if (playerSelection === computerSelection) {
                tiedRounds();
            }

            if (playerWins === 5) {
                
                phrase.textContent = 'YOU DEFEATED THE COMPUTER';
                document.getElementById('phrase').style.color = 'green';
                gameOver();

            } else if (computerWins === 5) {
                
                phrase.textContent = 'YOU HAVE BEEN DEFEATED BY THE COMPUTER';
                document.getElementById('phrase').style.color = 'red';
                gameOver();

            } else if (tieWins === 5) {

                phrase.textContent = 'THIS GAME IS A TIE!';
                document.getElementById('phrase').style.color = 'orange';
                gameOver();

            }

        }

        function playerWin() {
            ++playerWins;
            playerScore.textContent = 'Player Score: ' + playerWins;
            let phrase = document.getElementById('phrase')
            phrase.textContent = 'You win this round!'
        }

        function computerWin() {
            ++computerWins;
            computerScore.textContent = 'Computer Score: ' + computerWins;
            let phrase = document.getElementById('phrase')
            phrase.textContent = 'The Computer wins this round'
        }

        function tiedRounds() {
            ++tieWins;
            tieScore.textContent = 'Tied Rounds: ' + tieWins;
            let phrase = document.getElementById('phrase')
            phrase.textContent = 'This round is a tie!'
        }

        function resetGlobalVariables() {
            
            playerWins = 0;
            computerWins = 0;
            tieWins = 0;
        }

        function gameOver() {

            rockButton.removeEventListener('click', clickListener);
            paperButton.removeEventListener('click', clickListener);
            scissorButton.removeEventListener('click', clickListener);

            resetGlobalVariables();

        }

    

        

        



       