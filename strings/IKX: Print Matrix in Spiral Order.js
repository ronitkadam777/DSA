/*
 * Complete the function below.
 */
function printSpirally(matrix) {
    let rowStart = 0;
    let rowEnd = matrix.length-1;
    let colStart = 0;
    let colEnd = matrix[0].length-1;
    let result = [];
    while((rowStart <= rowEnd) && (colStart <= colEnd)) {
        // Along row Move Left
        if(rowStart <= rowEnd && colStart <= colEnd) {
            for(let i=colStart; i<=colEnd; i++) {
                result.push(matrix[rowStart][i]);
            }
            rowStart = rowStart + 1;
        }

        // Along col Move Down
        if(rowStart <= rowEnd && colStart <= colEnd) {
            for(let i=rowStart; i<=rowEnd; i++) {
                result.push(matrix[i][colEnd]);
            }
            colEnd = colEnd - 1;                        
        }

        // Along row Move Left
        if(rowStart <= rowEnd && colStart <= colEnd) {
            for(let i=colEnd; i>=colStart; i--) {
                result.push(matrix[rowEnd][i]);
            }
            rowEnd = rowEnd - 1;   
        }
        // Along col Move Up
        if(rowStart <= rowEnd && colStart <= colEnd) {
            for(let i=rowEnd; i>=rowStart; i--) {
                result.push(matrix[i][colStart]);
            }
            colStart = colStart + 1;   
        }
    }
    return result.join('');
}

