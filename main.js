(function gameBoard () {
    const tiles = document.querySelectorAll('[data-tiles]')

    const xButton = document.querySelector('.choose-x')
    const oButton = document.querySelector('.choose-o') 

    const gameDiv = document.querySelector('.game')
    const errorMessage = document.querySelector('.error-message')

    const winnerPopup = document.querySelector('.winner-popup')
    const winMessage = document.querySelector('.win-message')
    const closeButton = document.querySelector('.close-button')

    closeButton.addEventListener('click', clickReload)


    let board = [1, 2, 3, 
                 4, 5, 6, 
                 7, 8, 9];

    const allEqualX = arr => arr.every(val => val === arr[0] && val === 'x');
    const allEqualO = arr => arr.every(val => val === arr[0] && val === 'o');
    
    let playerSelection = '';

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
        tile.addEventListener('click', () => {
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
            
    })
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
    
    const tile0 = document.querySelector('.tile-div0')
    const tile1 = document.querySelector('.tile-div1')
    const tile2 = document.querySelector('.tile-div2')
    const tile3 = document.querySelector('.tile-div3')
    const tile4 = document.querySelector('.tile-div4')
    const tile5 = document.querySelector('.tile-div5')
    const tile6 = document.querySelector('.tile-div6')
    const tile7 = document.querySelector('.tile-div7')
    const tile8 = document.querySelector('.tile-div8')

    if (checkSpot == 0) {
        tile0.appendChild(weapon)
    }
    if (checkSpot == 1) {
        tile1.appendChild(weapon)
    }
    if (checkSpot == 2) {
        tile2.appendChild(weapon)
    }
    if (checkSpot == 3) {
        tile3.appendChild(weapon)
    }
    if (checkSpot == 4) {
        tile4.appendChild(weapon)
    }
    if (checkSpot == 5) {
        tile5.appendChild(weapon)
    }
    if (checkSpot == 6) {
        tile6.appendChild(weapon)
    }
    if (checkSpot == 7) {
        tile7.appendChild(weapon)
    }
    if (checkSpot == 8) {
        tile8.appendChild(weapon)
    }
}

function clickReload() {
    window.location.reload();
}