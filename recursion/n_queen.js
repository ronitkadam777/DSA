
/*
 * Complete the function below.
 * N Queen Problem
 */
function find_all_arrangements(n) {
    let board = generateBoard(n);
    return helper(board, n, 0, []);
    
}

function helper(board, size, rowIndex, result) {
    if(rowIndex > size) {
        return;
    }
    if(rowIndex === size) {
        let validSolution = [];
        for(let row=0; row < size; row++) {
            let rowString = '';
            for(let col=0; col < size; col++) {
                rowString = rowString + board[row][col];
            }
            validSolution.push(rowString);
        }
        result.push(validSolution);
        //Returns everytime the last nth queen has been placed
        //it would go back to line 50, remove her and add her to the next to see another combination exists
        return;
    }
    for(let columnIndex = 0; columnIndex < size; columnIndex++) {
        if(canPlaceQueen(board, size, rowIndex, columnIndex)) {
            board[rowIndex][columnIndex] = 'q'; 
            helper(board, size, rowIndex + 1, result);
            /*
            Failed to find a spot i.e. reached the end of the column, 
            comes out / backtracks 1 level and clears the position of the previous queen
            and moves her to the next free column.
            */
            board[rowIndex][columnIndex] = '-';
        } 
    }
    //Finally comes out of the for loop when the first row reaches the end of the loop
    return result;
}


/*
Generates a blank n*n board, i.e. a two dimensional array, each (empty) spot
is represented by a -
*/
function generateBoard(n) {
    let board = [];
    for(let i=0; i<n; i++) {
        let column = [];
        for(let j=0; j<n; j++) {
            column.push('-');
        }
        board.push(column);
    }
    return board;
}

/**
 * Helper function that checks if the line of attack for the queen is free 
*/
function canPlaceQueen(board, size, rowIndex, columnIndex) {
    if(emptyColumn(board, size, columnIndex) && emptyLeftDiagonal(board, size, rowIndex, columnIndex) && emptyRightDiagonal(board, size, rowIndex, columnIndex)) {
        return true;
    }
    return false;
}

//Check along the column for different row values
function emptyColumn(board, n, columnIndex) {
    for(let rowIndex=0; rowIndex < n; rowIndex++) {
        if(board[rowIndex][columnIndex] === 'q') return false;
    }
    return true;
}

//Check left diagonal up and down
function emptyLeftDiagonal(board, n, rowIndex, columnIndex) {
    //Check up
    let row = rowIndex;
    let column = columnIndex;
    while(rowIndex >= 0 && columnIndex >= 0) {
      if(board[rowIndex][columnIndex] === 'q') {
        return false;
      } else {
        rowIndex--;
        columnIndex--;
      }
    }
    //Check down
    while(row < n && column < n) {
      if(board[row][column] === 'q') {
        return false;
      } else {
        row++;
        column++;
      }
    }
    return true;
}

//Check right diagonal up and down
function emptyRightDiagonal(board, n, rowIndex, columnIndex) {
    //Check up
    let row = rowIndex;
    let column = columnIndex;
    while(rowIndex >= 0 && columnIndex < n) {
      if(board[rowIndex][columnIndex] === 'q') {
        return false;
      } else {
        rowIndex--;
        columnIndex++;
      }
    }
    //Check down
    while(row < n && column >= 0) {
      if(board[row][column] === 'q') {
        return false;
      } else {
        row++;
        column--;
      }
    }
    return true;
}

