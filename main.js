const tiles = document.querySelectorAll('[data-tiles]')


const xButton = document.querySelector('.choose-x')
const oButton = document.querySelector('.choose-o')




(function gameBoard () {
    let board = [1, 2, 3, 
                 4, 5, 6, 
                 7, 8, 9];

    const allEqualX = arr => arr.every(val => val === arr[0] && val === 'x');
    const allEqualO = arr => arr.every(val => val === arr[0] && val === 'o');
    
    let playerSelection = '';

    xButton.addEventListener('click', () =>{
        playerSelection = 'x'
    })

    oButton.addEventListener('click', () => {
        console.log(board)
        playerSelection = 'o'
    })
    
    
    tiles.forEach((tile) => {
        tile.addEventListener('click', () => {
            let spot = tile.innerText;
            console.log(board)
            if (board[spot] !== 'x' && board[spot] !== 'o') {
        
                board.splice(spot, 1, `${playerSelection}`) 
            }
                if (allEqualX([board[0], board[1], board[2]]) ||
                    allEqualX([board[3], board[4], board[5]]) ||
                    allEqualX([board[6], board[7], board[8]]) || 
                    allEqualX([board[0], board[3], board[6]]) ||
                    allEqualX([board[1], board[4], board[7]]) ||
                    allEqualX([board[2], board[5], board[8]]) ||
                    allEqualX([board[0], board[4], board[8]]) ||
                    allEqualX([board[2], board[4], board[6]])){
                    
                    console.log(board)
                    console.log('x wins!')
        
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
                
                console.log(board)
                console.log('o wins!')
        
                return;
        
               
            } 
        
    })
    })
    

    
    
    
    

    
   
  

    
    
    
    

   
    
    
    

    console.log(board)
    
    

}())

//check if x or o wins