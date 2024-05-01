(function gameBoard () {
    const tiles = document.querySelectorAll('[data-tiles]')

    const xButton = document.querySelector('.choose-x')
    const oButton = document.querySelector('.choose-o') 

    const gameDiv = document.querySelector('.game')
    const errorMessage = document.querySelector('.error-message')

    const winnerPopup = document.querySelector('.winner-popup')
    const winMessage = document.querySelector('.win-message')
    const closeButton = document.querySelector('.close-button')

    
    let board = [1, 2, 3, 
                 4, 5, 6, 
                 7, 8, 9];

    let playerSelection = '';

    const allEqualX = arr => arr.every(val => val === arr[0] && val === 'x');
    const allEqualO = arr => arr.every(val => val === arr[0] && val === 'o');
    
    closeButton.addEventListener('click', clickReload)
   
    xButton.addEventListener('click', () =>{
        playerSelection = 'x'
        errorMessage.innerHTML = ''
        console.log(playerSelection)
    })

    oButton.addEventListener('click', () => {
        playerSelection = 'o'
        errorMessage.innerHTML = ''
        console.log(playerSelection)
    })
    
    
    tiles.forEach((tile) => {
       const addSelection = () => {
            if (playerSelection == 'x' || playerSelection == 'o') {

                let spot = tile.innerText;
            
            if (board[spot] !== 'x' && board[spot] !== 'o') {
        
                board.splice(spot, 1, `${playerSelection}`)

                let weapon = document.createElement('span')
                weapon.innerHTML = `${playerSelection}`

                let checkSpot = spot
                
                addToDom(checkSpot, weapon)
                
                playerSelection = changePlayer(playerSelection)
                
                console.log(playerSelection)
                console.log(board)
                tile.removeEventListener('click', addSelection)
            }
                if (allEqualX([board[0], board[1], board[2]]) ||
                    allEqualX([board[3], board[4], board[5]]) ||
                    allEqualX([board[6], board[7], board[8]]) || 
                    allEqualX([board[0], board[3], board[6]]) ||
                    allEqualX([board[1], board[4], board[7]]) ||
                    allEqualX([board[2], board[5], board[8]]) ||
                    allEqualX([board[0], board[4], board[8]]) ||
                    allEqualX([board[2], board[4], board[6]])){
                    
                    winMessage.innerHTML = 'X wins!'
                    winnerPopup.style.display = 'flex'
        
                    return;
                } 
                if (allEqualO([board[0], board[1], board[2]]) ||
                    allEqualO([board[3], board[4], board[5]]) ||
                    allEqualO([board[6], board[7], board[8]]) || 
                    allEqualO([board[0], board[3], board[6]]) ||
                    allEqualO([board[1], board[4], board[7]]) ||
                    allEqualO([board[2], board[5], board[8]]) ||
                    allEqualO([board[0], board[4], board[8]]) ||
                    allEqualO([board[2], board[4], board[6]])){
                

                    winMessage.innerHTML = 'O wins!'
                    winnerPopup.style.display = 'flex'
        
                return;
        
            } 
            } else {
                
                errorMessage.innerHTML = '*Choose a weapon'

                gameDiv.prepend(errorMessage)
            }
            
    }
    tile.addEventListener('click', addSelection)
    })

  
    console.log(board)
    
}())

function changePlayer(playerSelection) {
    console.log('hello', playerSelection)
    if (playerSelection == 'x') {
        return 'o'
    } else if (playerSelection == 'o') {
        return 'x'
    }
}

function addToDom (checkSpot, weapon){
    
    if (checkSpot >= 0 && checkSpot <=8) {
        const tile = document.querySelector(`.tile-div${checkSpot}`)
        tile.appendChild(weapon);
    }
    
}

function clickReload() {
    window.location.reload();
}