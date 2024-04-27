


(function gameBoard () {
    let board = [1, 2, 3, 
                 4, 5, 6, 
                 7, 8, 9];
    
    const allEqual = arr => arr.every(val => val === arr[0]);
   
    for (let i = 0; i < board.length; i++) {
        
        let weapon= prompt('choose your weapon')
        let spot= prompt('choose your spot')

    if (board[spot] !== 'x' && board[spot] !== 'o') {
        
        board.splice(spot, 1, `${weapon}`) 
        
        if (allEqual([board[0], board[1], board[2]]) ||
            allEqual([board[3], board[4], board[5]]) ||
            allEqual([board[6], board[7], board[8]]) || 
            allEqual([board[0], board[3], board[6]]) ||
            allEqual([board[1], board[4], board[7]]) ||
            allEqual([board[2], board[5], board[8]]) ||
            allEqual([board[0], board[4], board[8]]) ||
            allEqual([board[2], board[4], board[6]])){
            
            console.log(board)
            console.log('you win!')

            return;
        } 
       
    } 
   }

    
    
    
    

   
    
    
    

    console.log(board)
    
    

}())

//check if x or o wins