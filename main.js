(function gameBoard () {
    const tiles = document.querySelectorAll('[data-tiles]')

    const player1 = document.querySelector('#user-1')
    const player2 = document.querySelector('#user-2')

    const winnerPopup = document.querySelector('.winner-dialog')
    const winMessage = document.querySelector('.win-message')
    const closeButton = document.querySelector('.close-button')

    const playerDialog = document.querySelector('dialog')
    playerDialog.showModal()

    
    let board = [];

    let boardCombs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const createBoard = function() {
        for (let i = 0; i < 9; i ++) {
        board.push(i)
    }}
    createBoard();
    

    const checkBoard = function() {
        const checkTie = board.every((tile) => tile == 'x' || tile == 'o')
    
        for ( let index in boardCombs) {
            
            const [first, second, third] = boardCombs[index]
            
            if (!board[first] < 9 && board[first] == board[second] && board[second] == board[third]) {
               
                if (board[first, second, third] == 'x') {
                    
                    winMessage.innerHTML = `${player1.value} wins!`
                    winnerPopup.showModal()
        
               }

               if (board[first, second, third] == 'o') {
                
                    winMessage.innerHTML = `${player2.value} wins!`
                    winnerPopup.showModal()

               }
               
            }  else if (checkTie) {
                console.log(board[index])
                winMessage.innerHTML = 'You tied :('
                winnerPopup.showModal()
            }   
 
        }
    }

     let player = 'x';

    
    closeButton.addEventListener('click', clickReload)
    
   
    tiles.forEach((tile) => {
       const addSelection = () => {
     
            let spot = tile.innerText;
            
            if (board[spot] !== 'x' && board[spot] !== 'o') {
        
                board.splice(spot, 1, `${player}`)

                let weapon = document.createElement('span')
                weapon.innerHTML = `${player}`

                let checkSpot = spot
                
                addToDom(checkSpot, weapon)

                checkBoard()
                
                player = changePlayer(player)
                
                tile.removeEventListener('click', addSelection)
            }    
        }
    
        tile.addEventListener('click', addSelection)
    })

}())

function changePlayer(player) {
    if (player == 'x') {
        return 'o'
    } else if (player == 'o') {
        return 'x'
    }
}

function addToDom (checkSpot, weapon){  
    if (checkSpot >= 0 && checkSpot <=8) {
        const tile = document.querySelector(`.tile-div${checkSpot}`)
        tile.appendChild(weapon);
    }
}

function clickReload(winnerPopup) {
    window.location.reload();
}
