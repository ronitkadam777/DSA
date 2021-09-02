/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let found;
var searchMatrix = function(matrix, target) {
    found = false;
    helper(matrix, target);
    return found;
};

function helper(matrix, target) {
    let rowLength = matrix[0].length;
    let colLength = matrix.length;
    
    let start = 0;
    let end = (rowLength*colLength)-1;
    
    
    while(start <= end) {
        let midIndex = start + Math.floor((end-start)/2);
        let [midRowIndex, midColIndex] = [Math.floor(midIndex/rowLength), midIndex%rowLength];
        if(target === matrix[midRowIndex][midColIndex]) {
            found = true;
            return;
        } else if(target > matrix[midRowIndex][midColIndex]) {
            start = midIndex + 1;
        } else {
            end = midIndex - 1;
        }
    }
}