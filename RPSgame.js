// get elemnts
rockPic = document.querySelector('.rockPic');
paperPic = document.querySelector('.paperPic');
scissorsPic = document.querySelector('.scissorsPic');
playerPickImg = document.getElementById('playerPick');
computerPickImg = document.getElementById('computerPick');
playerScoreElement = document.getElementById('playerScore');
computerScoreElement = document.getElementById('computerScore');
resultTextElement = document.querySelector('.textResult');
finalResultElement = document.querySelector('.results');
pFinalResult = document.querySelector('.results p');
playAgainButton = document.querySelector('.playAgainButton');


// add functions
let gameOver = false;
let wait = false;
let result = '';
let playerPick = '';
let computerPick = '';
let resultText = '';
let playerScore = 0;
let computerScore = 0;

function aPressed() {
    rockPic.style.height = '170px';
    rockPic.style.border = '10px solid rgb(57, 255, 20)';
    playerPick = 'rock';
    createComputerPick();
    calculateScore();
}
function sPressed() {
    paperPic.style.height = '170px';
    paperPic.style.border = '10px solid rgb(57, 255, 20)';
    playerPick = 'paper';
    createComputerPick();
    calculateScore();
}
function dPressed() {
    scissorsPic.style.height = '170px';
    scissorsPic.style.border = '10px solid rgb(57, 255, 20)';
    playerPick = 'scissors';
    createComputerPick();
    calculateScore();
}

function createComputerPick() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        computerPick = 'rock';
        computerPickImg.src = "images/rock.jpg";
    }
    else if (number === 2) {
        computerPick = 'paper';
        computerPickImg.src = "images/paper.jpg";
    }
    else if(number === 3) {
        computerPick = 'scissors';
        computerPickImg.src = "images/scissors.jpg";
    }
}

function generateImages(letter) {
    if (letter === 'a') {
        playerPickImg.src="images/rock.jpg";
    }
    else if (letter === 's') {
        playerPickImg.src="images/paper.jpg";
    }
    else if(letter === 'd') {
        playerPickImg.src="images/scissors.jpg";
    }
}

function calculateScore() {
    if (playerPick === computerPick) {
        resultText = "Even! Both players picked " + playerPick;
        result = 'draw';
    }
    else if (playerPick === 'rock') {
        if (computerPick === 'paper') {
            resultText = "Oh no! Paper beats rock.";
            result = 'lose';
            computerScore++;
        }
        else if (computerPick === 'scissors') {
            resultText = "Nice! Rock beats scissors";
            result = 'win';
            playerScore++;
        }
    }
    else if (playerPick === 'paper') {
        if (computerPick === 'scissors') {
            resultText = "Oh no! Scissors beats paper.";
            result = 'lose';
            computerScore++;
        }
        else if (computerPick === 'rock') {
            resultText = "Nice! Paper beats rock";
            result = 'win';
            playerScore++;
        }
    }
    else  {
        if (computerPick === 'rock') {
            resultText = "Oh no! Rock beats scissors.";
            result = 'lose';
            computerScore++;
        }
        else if (computerPick === 'paper') {
            resultText = "Nice! Scissors beats paper";
            result = 'win';
            playerScore++;
        }
    }
    playerScoreElement.innerHTML = playerScore;
    computerScoreElement.innerHTML = computerScore;
    if (playerScore === 5) {
        console.log("player score reached 5");
        gameOver = true;
        finalResultElement.style.visibility = 'visible';
        pFinalResult.style.color = '#7FFF00';
        pFinalResult.innerHTML = "You win! Congratulations!";
        resultTextElement.style.visibility = 'hidden';        
    }
    else if (computerScore === 5) {
        gameOver = true;
        finalResultElement.style.visibility = 'visible';
        pFinalResult.style.color = '#B22222';
        pFinalResult.innerHTML = "You just lost to a computer!";
        resultTextElement.style.visibility = 'hidden';
    }
    else {
        resultTextElement.innerHTML = resultText;
        if (result === 'draw') resultTextElement.style.color = 'black';
        else if (result === 'win') resultTextElement.style.color = '#7FFF00';
        else resultTextElement.style.color = '#B22222';
    }
}

//hook up event listeners to functions
window.addEventListener('keypress', (e) => {
    if (!wait) {
        if(!gameOver) {
            generateImages(e.key);
            if (e.key === 'a') {
                aPressed();                                
                wait = true;
                setTimeout(() => { 
                     wait = false;
                     rockPic.style.height = '';
                     rockPic.style.border = '';
                 }, 750);
            }
            if (e.key === 's') {
                sPressed();
                wait = true;
                setTimeout(() => { 
                     wait = false;
                     paperPic.style.height = '';
                    paperPic.style.border = '';
                    }, 750);
            }
            if (e.key === 'd') {
                dPressed();
                wait = true;
                setTimeout(() => { 
                     wait = false; 
                     scissorsPic.style.height = '';
                     scissorsPic.style.border = '';
                    }, 750);
            }
            
        }
    }
    else {
        return;
    }        
})

//playAgainButton.addEventListener('click', window.location.reload());