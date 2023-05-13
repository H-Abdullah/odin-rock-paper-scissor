// Get reference for all button element in html 
const buttons = document.querySelectorAll('button');
// Get reference for button img in html
const btnRock = document.getElementById('img-rock');
const btnPaper = document.getElementById('img-paper');
const btnScissor = document.getElementById('img-scissor');
// Get reference by id for div element in html
const divText = document.getElementById('textResult');
const divPoint = document.getElementById('point-result');
const divPlayer = document.getElementById('player-points');
const divComputer = document.getElementById('computer-points');
const divPlayerOption = document.getElementById('player-option');
const divCompOption = document.getElementById('comp-option');
// Get reference by id for button element in html
const resetBtn = document.getElementById('resetBtn');
// Create img element for divCompOption
const imgElement = document.createElement('img');

// Hold point for player and computer
let point = {'player': 0, 'computer': 0};

// Count for game repeatitions
let gameCount = 0;

// Toggle the active state game after finished 1 round
let gameActive = true;

// Reset the game
function resetGame() {
    gameActive = true;
    divText.innerHTML = '';
    divPlayer.innerHTML = '';
    divComputer.innerHTML = '';
    imgElement.src = '';
    gameCount = 0;
    point = {'player': 0, 'computer': 0};
    const pPoint = document.createTextNode(point.player);
    const cPoint = document.createTextNode(point.computer); 
    const initialText = document.createTextNode('Pilih salah satu untuk mulakan permainan');
    divPlayer.appendChild(pPoint);
    divComputer.appendChild(cPoint);
    divText.appendChild(initialText);
    divCompOption.removeChild(imgElement);
    divPlayerOption.style.backgroundColor = '#a2a8d3';
    divCompOption.style.backgroundColor = '#a2a8d3';
    btnRock.style.backgroundColor = '#a2a8d3';
    btnPaper.style.backgroundColor = '#a2a8d3';
    btnScissor.style.backgroundColor = '#a2a8d3';
}

// End the game and give final result
function endGame(gameCount) {
    const endText = document.createTextNode(`Awak telah bermain sebanyak ${gameCount} kali pusingan.`)
    divText.innerHTML = '';
    divText.appendChild(endText);

    if (point.player === point.computer) {
        divCompOption.style.backgroundColor = 'green';
        btnRock.style.backgroundColor = 'green';
        btnPaper.style.backgroundColor = 'green';
        btnScissor.style.backgroundColor = 'green';
    }

    if (point.player > point.computer) {
        divPlayerOption.style.backgroundColor = 'green';
        divCompOption.style.backgroundColor = 'red';
        btnRock.style.backgroundColor = 'green';
        btnPaper.style.backgroundColor = 'green';
        btnScissor.style.backgroundColor = 'green';
    } else if (point.computer > point.player) {
        divCompOption.style.backgroundColor = 'green';
        divPlayerOption.style.backgroundColor = 'red';
        btnRock.style.backgroundColor = 'red';
        btnPaper.style.backgroundColor = 'red';
        btnScissor.style.backgroundColor = 'red';
    }
};

// Append text and point result from choicesArena into #textResult and #pointResult
function appendResult(player, computer) {
    const resultText = document.createTextNode(`${player} lawan ${computer}`);
    const pPoint = document.createTextNode(point.player);
    const cPoint = document.createTextNode(point.computer);
    divText.innerHTML = '';
    divPlayer.innerHTML = '';
    divComputer.innerHTML = '';
    divText.appendChild(resultText);
    divPlayer.appendChild(pPoint);
    divComputer.appendChild(cPoint);
};

// Use value from player and computer choices to calculate the result
function choicesArena(player, computer) {
    if (!gameActive) {
        return;
    };

    if (player === computer) {
        appendResult(player, computer);
        const drawResult = document.createTextNode(`Seri! Kedua-duanya memilih ${player}.`);
        divText.innerHTML = '';
        divText.appendChild(drawResult);
    };
    
    if (player !== computer) {
        if (player === 'BATU' && computer === 'KERTAS') {
            point.computer++;
            appendResult(player, computer);
        } else if (player === 'BATU' && computer === 'GUNTING') {
            point.player++;
            appendResult(player, computer);
        } else if (player === 'KERTAS' && computer === 'BATU') {
            point.player++;
            appendResult(player, computer);
        } else if (player === 'KERTAS' && computer === 'GUNTING') {
            point.computer++;
            appendResult(player, computer);
        } else if (player === 'GUNTING' && computer === 'BATU') {
            point.computer++;
            appendResult(player, computer);
        } else if (player === 'GUNTING' && computer === 'KERTAS') {
            point.player++;
            appendResult(player, computer);
        } else {
            return 'Invalid';
        };
    };

    gameCount++;

    if (point.player === 5 || point.computer === 5) {
        endGame(gameCount);
        gameActive = false;
    }
};

// Get computer choices
function computerChoice() {
    const choices = ['BATU', 'KERTAS', 'GUNTING'];
    const randomArr = Math.round((Math.random() * (choices.length - 1)));
    
    // Make sure that no more images added after 5 rounds\
    if (!gameActive) {
        return;
    };

    // Append pictures for every choices made
    if (randomArr === 0) {
        imgElement.src = '';
        imgElement.src = './images/computer-rock-no-bg.png'
        divCompOption.appendChild(imgElement);
        return 'BATU';
    }
    if (randomArr === 1) {
        imgElement.src = '';
        imgElement.src = './images/computer-paper-no-bg.png'
        divCompOption.appendChild(imgElement);
        return 'KERTAS';
    }
    if (randomArr === 2) {
        imgElement.src = '';
        imgElement.src = './images/computer-scissor-no-bg.png'
        divCompOption.appendChild(imgElement);
        return 'GUNTING';
    }

    if (point.player === 5 || point.computer === 5) {
        gameActive = false;
    }
}

// Get value from each button clicked and use it as player choices
function playerChoice() {
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            var buttonValue = event.currentTarget.value;

            if (buttonValue === 'reset') {
                resetGame();
            } else {
                choicesArena(buttonValue, computerChoice());
            };   
        });
    });
};

// Make sure that initial number 0 for point counter is added everytime the page is loaded
window.addEventListener('load', () => {
    const pPoint = document.createTextNode(point.player);
    const cPoint = document.createTextNode(point.computer); 
    divPlayer.appendChild(pPoint);
    divComputer.appendChild(cPoint);
})

// Run the function
playerChoice();
